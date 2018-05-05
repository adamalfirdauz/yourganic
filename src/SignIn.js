import React from 'react'
import { 
    View, Text, StyleSheet, ImageBackground, Image, Platform,
    KeyboardAvoidingView, ActivityIndicator, AsyncStorage, StatusBar
} from 'react-native';
import { 
    Container, Header, Left, Body, Right, Button, Icon, 
    Title, Content, FooterTab, Footer, Form, Item, Input ,
    Label
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
// import { StackNavigator } from 'react-navigation';


var myBackground = require('../assets/image/pink.jpg');
var logo = require('../assets/image/Logo.png');

class SignIn extends React.Component{
    static navigationOptions = {
        // title: "Login",
        headerTitleStyle: { color: 'white' },
        headerStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            borderBottomWidth: 0,
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
            elevation: 0,
        },
    }
    constructor(props) {
        super(props);
    }
    state = {
        email: '',
        password:'',
        loading: false
    };

    session(data){
        try {
            AsyncStorage.setItem('profile', JSON.stringify(data));
        } catch (error) {
            // Error saving data
        }
    }

    login(){
        this.setState({loading: true})
        fetch('http://azizpc.codepanda.web.id/api/auth/login',{
            method: 'post',
            headers:{
                Accept: 'application/json',
                'Content-type' : 'application/json' 
            },
            body:JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        }).then((response)=> response.json())
                .then((responseJSON)=> {
                    if(responseJSON.data){
                        // console.error(responseJSON)
                        // this.setState({loading: true})
                        this.session(responseJSON)
                        this.redirect_Home(responseJSON)
                        alert("Login Berhasil")
                    }
                    else{
                        // console.error(responseJSON)
                        alert("Login gagal, periksa email dan password anda")
                        this.setState({loading: false})
                    }
                })
                .catch((error)=>{
                    console.error(error)
                })
    }
    redirect(){
        this.props.navigation.navigate('Register')
    }
    redirect_Home(data){
        this.props.navigation.navigate('Home', data) 
      }

    render() {
        return (
            <Container style={styles.container}>
                <StatusBar
                    backgroundColor="#004600"
                    barStyle="light-content"
                />
                <View style={{ flex: 2, alignSelf: 'center' }}>
                    <Image source={logo} style={styles.logo} />
                    <ActivityIndicator size="large" animating={this.state.loading}/>
                </View>
                <View style={{ flex: 2, alignSelf: 'stretch', flexDirection: 'column' }}>
                    <KeyboardAvoidingView style={{ flex: 2 }}>
                        <View style={{ flex: 3, paddingHorizontal: 20 }}>
                            <Item floatingLabel>
                                <Label style={styles.labelStyle}>Email</Label>
                                <Input
                                    style={styles.inputTextStyle}
                                    onChangeText={(email) => this.setState({ email })}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.labelStyle}>Password</Label>
                                <Input
                                    style={styles.inputTextStyle}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password })}
                                />
                            </Item>
                            <Button
                                onPress={() => this.login()}
                                block={true}
                                style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>Login</Text>
                            </Button>
                            <View>
                                <Text style={{ color: 'white', alignSelf: 'center' }}> Dont have an account? Register here.</Text>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007300',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleStyle: {
    },
    buttonStyle: {
        marginVertical: 20,
        borderRadius: 20,
        backgroundColor: '#004600'
    },
    buttonTextStyle: {
        color: 'white'
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    headerStyle: {
    },
    labelStyle: {
        color: 'white',
    },
    inputTextStyle: {
        color: 'white',
    }
});

// export default StackNavigator({
    
// });

export default SignIn;