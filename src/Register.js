import React from 'react'
import {View,Text,StyleSheet,ImageBackground, TextInput, ScrollView, ActivityIndicator} from 'react-native';
import { 
    Container, Header, Left, Body, Right, Button, Icon, 
    Title, Content, FooterTab, Footer, Form, Item, Input, Label
} from 'native-base';
import {StackNavigator} from 'react-navigation';

import SignIn from './SignIn';
// import Register from './register';

var myBackground = require('../assets/image/pink.jpg');

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
            <Container style={styles.headerStyle}>   
                <ImageBackground source={myBackground}
                    style={{ width: '100%', height: '100%' }}>
                    <Header style={{ backgroundColor: 'transparent' }} noShadow>
                        <Left>
                            <Button transparent         
                                title="Go to Jane's profile"
                                onPress={() =>
                                this.redirect()}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.title}>Register</Title>
                        </Body>
                        <Right />
                    </Header>
                    <ScrollView style={styles.container}>
                        <Text style={styles.titleStyle}>
                            Welcome to Yourganic!
                        </Text>
                        <Form>
                            <Item floatingLabel>
                                 <Label style={styles.title}>Email</Label>
                                 <Input style={styles.input} 
                                 onChangeText={(email) => this.setState({email})} 
                                 />
                            </Item>
                            <ActivityIndicator animating={this.state.loading} size="large" style={styles.loader}/>
                            <Item floatingLabel >
                                <Label style={styles.title}>Password</Label>
                                <Input 
                                style={styles.input}
                                secureTextEntry= {true} 
                                onChangeText={(password) => this.setState({password})}
                                />
                            </Item>

                            <Item floatingLabel >
                                <Label style={styles.title}>Retype Password</Label>
                                <Input 
                                style={styles.input}
                                secureTextEntry= {true} 
                                onChangeText={(retype) => this.setState({retype})}
                            />
                            </Item>

                            <Item floatingLabel >
                                <Label style={styles.title}>Handphone</Label>
                                <Input 
                                style={styles.input}
                                keyboardType={"numeric"}
                                onChangeText={(handphone) => this.setState({handphone})}
                                />
                            </Item>
                        </Form>

                        <Button
                            block={true}
                            style={styles.buttonStyle}
                            onPress={() => this.register()}
                            >
                            <Text style={styles.buttonTextStyle}>Register</Text>
                        </Button>
                    </ScrollView>
                </ImageBackground>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center', 
    },
    titleStyle: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        margin:20,
        paddingTop: 70,
    },
    buttonStyle: {
        margin: 10
    },
    buttonTextStyle: {
        color: 'white',

    },
    title:{
        color: 'white'
    },
    input:{
        color: 'white',
    },
    loader:{
        position : 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop : 100
    }
});

export default Register;