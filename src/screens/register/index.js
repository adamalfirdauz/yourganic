import React from 'react'
import {
    View, Text, StyleSheet, ImageBackground, TextInput, ScrollView, ActivityIndicator,
    Image, KeyboardAvoidingView, StatusBar, TouchableOpacity, AsyncStorage
} from 'react-native';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Content, FooterTab, Footer, Form, Item, Input, Label
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles'

var axios = require('../../api/axios.js');
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
        name: '',
        address: '',
        email: '',
        password: '',
        retype: '',
        phone: '',
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
    registerAPI() {
        this.setState({ loading: true })
        axios.post('/api/register',
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                c_password: this.state.retype,
                phone: this.state.phone,
                address: this.state.address,
            }, {
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
            }).then(response => {
                // console.error(response)
                try {
                    // this.storeItem('user-profile', response.data.data)
                    // this.storeItem('access-token', response.data.meta.token)
                    alert('<b><center>Pendaftaran Berhasil !!</center></b>\nsilahkan lakukan konfirmasi melalui email anda sebelum login')
                } catch (error) {
                    console.error(error);
                }
                this.loginNavigate()
            }).catch(error => {
                console.error(error);
            });
    }
    homeNavigate() {
        const resetActionHome = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Drawer',
                })
            ],
        });
        this.props.navigation.dispatch(resetActionHome);
    }
    loginNavigate() {
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <Container style={styles.container}>
                <StatusBar
                    backgroundColor="#004600"
                    barStyle="light-content"
                />
                <ScrollView style={{ flex: 2, alignSelf: 'stretch', flexDirection: 'column' }}>
                <View style={{ flex: 1, alignSelf: 'center' }}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={{ flex: 2, alignSelf: 'stretch', flexDirection: 'column' }}>
                        {this.state.loading ?
                            <View style={{ paddingTop:150, alignSelf: 'center', justifyContent: 'center', position: 'absolute' }}>
                                <ActivityIndicator size="large" />
                            </View>
                            :
                            <View />
                        }
                        <View style={{ flex: 3, paddingHorizontal: 20 }}>
                            <Item floatingLabel>
                                <Label style={styles.title}>Nama</Label>
                                <Input style={styles.input}
                                    onChangeText={(name) => this.setState({ name })}
                                />
                            </Item>
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
                                <Label style={styles.title}>Alamat</Label>
                                <Input
                                    style={styles.input}
                                    onChangeText={(address) => this.setState({ address })}
                                />
                            </Item>
                            <Item floatingLabel >
                                <Label style={styles.title}>Handphone</Label>
                                <Input
                                    style={styles.input}
                                    keyboardType={"numeric"}
                                    onChangeText={(phone) => this.setState({ phone })}
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
                </View>
                </ScrollView>
            </Container>
        );
    }
}


export default Register;