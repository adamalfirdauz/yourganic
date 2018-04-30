import React from 'react'
import { 
    View, Text, StyleSheet, ImageBackground, Image, Platform,
    KeyboardAvoidingView, ActivityIndicator, AsyncStorage
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
                            alert("Login Berhasil")
                            this.setState({loading: false})
                            this.session(responseJSON)
                            this.redirect_Home(responseJSON)
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
            <ImageBackground source={myBackground}
                style={{ width: '100%', height: '100%' }}>
                <ScrollView style={{flex:1}}>
                    <KeyboardAvoidingView behavior="padding">
                        <Image source={logo} style={styles.logo} />
                        <ActivityIndicator animating={this.state.loading}/>
                        <Content>
                            {/* <Text style={styles.titleStyle}>Welcome to Yourganic!</Text> */}
                            <Form>
                                <Item floatingLabel>
                                    <Label style={styles.labelStyle}>Email</Label>
                                    <Input 
                                    style={styles.inputTextStyle} 
                                    onChangeText={(email) => this.setState({email})} 
                                    />
                                </Item>
                                <Item floatingLabel last>
                                    <Label style={styles.labelStyle}>Password</Label>
                                    <Input 
                                    style={styles.inputTextStyle} 
                                    onChangeText={(password) => this.setState({password})} 
                                    />
                                </Item>
                            </Form>
                            <Button
                                onPress={() => this.login()}
                                block={true}
                                style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>Sign In</Text>
                                
                            </Button>
                            <Text style={{ color: 'white', alignSelf: 'center', marginTop: 60, }}> Dont have account? SIGN UP</Text>
                        </Content>
                    </KeyboardAvoidingView>
                </ScrollView>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    titleStyle: {
        fontSize: 25,
        color: 'white',
        // alignItems: 'center',
        alignSelf: 'center'
    },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
    },
    buttonTextStyle: {
        color: 'white'
    },
    logo: {
        // flex: 1,
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 50,
        width: 250,
        height: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    headerStyle: {
        backgroundColor: 'transparent', 
        marginTop: Platform.OS === "android" ? 13 : 0,
        // paddingTop: 18,
        // marginTop: Platform.OS === "android" ? 18 : 0,
        // backgroundColor: 'gray',
    },
    labelStyle: {
        color: 'white',
    },
    inputTextStyle: { 
        color: 'white' 
    }
});

// export default StackNavigator({
    
// });

export default SignIn;