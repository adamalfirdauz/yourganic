import React from 'react'
import {
    View, Text, StyleSheet, ImageBackground, Image, Platform,
    KeyboardAvoidingView, ActivityIndicator, AsyncStorage, StatusBar, TouchableOpacity
} from 'react-native';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Content, FooterTab, Footer, Form, Item, Input,
    Label
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
// import { axios } from 'axios'

var axios = require('../../api/axios.js');
var logo = require('../../../assets/image/Logo.png');

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
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
    state = {
        email: 'adam@gmail.com',
        password: '123456',
        loading: false
    };
    async storeItem(key, item) {
        try {
            var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
            return jsonOfItem;
        } catch (error) {
            console.log(error.message);
        }
    }
    session(data) {
        try {
            AsyncStorage.setItem('user-profile', JSON.stringify(data));
        } catch (error) {
            console.error(error);
        }
    }
    loginAPI() {
        this.setState({ loading: true })
        axios.post('/api/login',
        {
            email: this.state.email,
            password: this.state.password
        },{
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
        }).then(response => {
            if(response.data){
                this.storeItem('user-profile',response.data.data)
                this.storeItem('access-token', response.data.meta.token)
                this.homeNavigate()
            }
            else{
                alert("Login gagal, periksa email dan password anda")
            }
        }).catch( error => {
            console.error(error);
        });
    }
    registerNavigate() {
        this.props.navigation.navigate('Register')
    }
    homeNavigate() {
        const resetActionHome = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Drawer', params: {name:'Adam'}
                })
            ],
        });
        this.props.navigation.dispatch(resetActionHome);
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
                    <ActivityIndicator size="large" animating={this.state.loading} />
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
                                onPress={() => this.loginAPI()}
                                block={true}
                                style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>Login</Text>
                            </Button>
                            <TouchableOpacity onPress={() => this.registerNavigate()}>
                                <Text style={{ color: 'white', alignSelf: 'center' }}> Dont have an account? Register here.</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Container>
        );
    }
}

export default Login;