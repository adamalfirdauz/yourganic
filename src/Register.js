import React from 'react'
import {
    View,Text,StyleSheet,ImageBackground, TextInput, ScrollView, ActivityIndicator,
    Image, KeyboardAvoidingView, StatusBar
} from 'react-native';
import { 
    Container, Header, Left, Body, Right, Button, Icon, 
    Title, Content, FooterTab, Footer, Form, Item, Input, Label
} from 'native-base';
import {StackNavigator} from 'react-navigation';

import SignIn from './SignIn';
// import Register from './register';

var logo = require('../assets/image/Logo.png');
// var myBackground = require('../assets/image/pink.jpg');

class Register extends React.Component{
    static navigationOptions = {
        // title: "Register",
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
        name : 'Ryan',
        alamat: 'jalanku',
        email: 'mailsas@mail.com',
        password:'azharns1653',
        retype :'hahaa',
        phone:'085373318178',
        status: '1',
        loading : false
      };

      register(){
          this.setState({loading: true})
          fetch('http://azizpc.codepanda.web.id/api/auth/register',{
              method: 'post',
              headers:{
                  Accept: 'application/json',
                  'Content-type' : 'application/json' 
              },
              body:JSON.stringify({
                  name: this.state.name,
                  email: this.state.email,
                  password: this.state.password,
                  phone: this.state.phone,
                  alamat: this.state.alamat,
                  status: this.state.status

              })

          }).then((response)=> response.json())
                    .then((responseJSON)=> {
                        if(responseJSON.data){
                            alert("Pendaftaran Berhasil")
                            this.setState({loading: false})
                            this.redirect_Home(responseJSON)
                        }
                        else{
                            alert("Pendaftaran gagal, isi data dengan benar!!")
                            this.setState({loading: false})
                        }
                    })
                    .catch((error)=>{
                        console.error(error)
                    })
      }

      redirect_Home(data){
        this.props.navigation.navigate('Home', data) 
      }

      redirect(){
        this.props.navigation.navigate('Main', { name: 'Jane' } )
      }
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <StatusBar
                    backgroundColor="#004600"
                    barStyle="light-content"
                />
                <View style={{ flex: 1, alignSelf: 'center' }}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={{ flex: 2, alignSelf: 'stretch', flexDirection: 'column' }}>
                    <KeyboardAvoidingView style={{ flex: 2 }}>
                        <View style={{ flex: 3, paddingHorizontal: 20 }}>
                            <ActivityIndicator style={styles.loading} size="large" animating={this.state.loading}/>
                            <Item floatingLabel>
                                <Label style={styles.title}>Email</Label>
                                <Input style={styles.input}
                                    onChangeText={(email) => this.setState({ email })}
                                />
                            </Item>
                            <Item floatingLabel >
                                <Label style={styles.title}>Password</Label>
                                <Input
                                    style={styles.input}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password })}
                                />
                            </Item>

                            <Item floatingLabel >
                                <Label style={styles.title}>Retype Password</Label>
                                <Input
                                    style={styles.input}
                                    secureTextEntry={true}
                                    onChangeText={(retype) => this.setState({ retype })}
                                />
                            </Item>

                            <Item floatingLabel >
                                <Label style={styles.title}>Handphone</Label>
                                <Input
                                    style={styles.input}
                                    keyboardType={"numeric"}
                                    onChangeText={(handphone) => this.setState({ handphone })}
                                />
                            </Item>
                            <Button
                                onPress={() => this.register()}
                                block={true}
                                style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>Register</Text>
                            </Button>
                            <View>
                                <Text style={{ color: 'white', alignSelf: 'center' }}> Already have an account? Login here.</Text>
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
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        margin: 20,
        paddingTop: 70,
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
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    labelStyle: {
        color: 'white',
    },
    inputTextStyle: {
        color: 'white',
    },
    title: {
        color: 'white'
    },
    input: {
        color: 'white',
    },
    loading:{
        position : 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop : 100
    }
});

export default Register;