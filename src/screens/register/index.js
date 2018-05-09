import React from 'react'
import {
    View, Text, StyleSheet, ImageBackground, TextInput, ScrollView, ActivityIndicator,
    Image, KeyboardAvoidingView, StatusBar, TouchableOpacity
} from 'react-native';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Content, FooterTab, Footer, Form, Item, Input, Label
} from 'native-base';
import styles from './styles'

var logo = require('../../../assets/image/Logo.png');

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
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
    state = {
        name: 'Ryan',
        alamat: 'jalanku',
        email: 'mailsas@mail.com',
        password: 'azharns1653',
        retype: 'hahaa',
        phone: '085373318178',
        status: '1',
        loading: false
    };
    registerAPI() {
        this.setState({ loading: true })
        fetch('http://azizpc.codepanda.web.id/api/auth/register', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                alamat: this.state.alamat,
                status: this.state.status

            })
        }).then((response) => response.json())
            .then((responseJSON) => {
                if (responseJSON.data) {
                    // alert("Pendaftaran Berhasil")
                    this.setState({ loading: false })
                    this.homeNavigate(responseJSON)
                }
                else {
                    alert("Pendaftaran gagal, isi data dengan benar!!")
                    this.setState({ loading: false })
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }
    homeNavigate(data) {
        this.props.navigation.navigate('Home', data)
    }
    loginNavigate(){
        this.props.navigation.navigate('Login')
    }
    render() {
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
                            <ActivityIndicator style={styles.loading} size="large" animating={this.state.loading} />
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
                                onPress={() => this.registerAPI()}
                                block={true}
                                style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>Register</Text>
                            </Button>
                            <TouchableOpacity onPress={() => this.loginNavigate()}>
                                <Text style={{ color: 'white', alignSelf: 'center' }}> Already have an account? Login here.</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Container>
        );
    }
}


export default Register;