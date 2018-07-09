import React from 'react'
import {
    View, Text, ImageBackground, Image, Platform,
    KeyboardAvoidingView, StatusBar, AsyncStorage, BackHandler, TouchableOpacity
} from 'react-native';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Content, FooterTab, Footer, Form, Item, Input,
    Label
} from 'native-base';
import Provider from '../../provider/setup.js'
import styles from './styles';


var logo = require('../../../assets/image/Logo.png');

class Prelogin extends React.Component {
    constructor(props) {
        super(props)
        this.fetchProfile()
    }
    state = {
        myProfile: false
    }
    async fetchProfile() {
        try {
            const value = await AsyncStorage.getItem('profile')
            let parsed = JSON.parse(value)
            // console.error(parsed.data.nama)
            if (value !== null) {
                // We have data!!
                // console.error(parsed.nama);
                this.props.navigation.replace('Home');
            }
        } 
        catch (error) {
            // Error retrieving data
            console.error("error")
        }
    }
    static navigationOptions = {
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
        }
    }
    homeNavigate() {
        this.props.navigation.navigate('Home')
    }
    loginNavigate() {
        this.props.navigation.navigate('Login')
    }
    registerNavigate() {
        this.props.navigation.navigate('Register')
    }
    gusetNavigate() {
        this.props.navigation.navigate('Guest')
    }

    render() {
        return (
            <Container style={styles.container}>
                <StatusBar
                    backgroundColor="#004600"
                    barStyle="light-content"
                />
                <View style={{ flex: 2, alignSelf: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 3, paddingHorizontal: 20 }}>
                            <Button
                                block={true}
                                style={styles.buttonStyle}
                                onPress={() => this.loginNavigate()}>
                                <Text style={styles.buttonTextStyle}>Login</Text>
                            </Button>
                            <Button
                                block={true}
                                style={styles.buttonStyle}
                                onPress={() => this.registerNavigate()}>
                                <Text style={styles.buttonTextStyle}>Register</Text>
                            </Button>
                        </View>
                    </View>
                </View>
                <Footer style={styles.footer}>
                    <TouchableOpacity onPress={()=>this.gusetNavigate()}>
                        <Text style={{ color: 'white', alignSelf: 'center', marginTop:15 }}> Continue as guest mode.</Text>
                    </TouchableOpacity>
                </Footer>
            </Container>
        );
    }
}


export default Prelogin;