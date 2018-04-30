import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Platform} from 'react-native';
import { 
    Container, Header, Left, Body, Right, Button, Icon, 
    Title, Content, FooterTab, Footer, Form, Item, Input ,
    Label
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Sidebar from 'react-native-sidebar';

var myBackground = require('../assets/image/pink.jpg');
var logo = require('../assets/image/Logo.png');
class Mains extends React.Component{
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
    redirect_signIn(){
        this.props.navigation.navigate('SignIn')
    }
    redirect_register(){
        this.props.navigation.navigate('Register')
    }

    render() {
        return (
            <Container style={styles.headerStyle}>
                <ImageBackground source={myBackground}
                    style={{ width: '100%', height: '100%' }}>
                    <ScrollView style={{flex: 1}}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.titleStyle}>Welcome to Yourganic!</Text>

                        <Button
                            block={true}
                            style={styles.buttonStyle}
                            onPress={() => this.redirect_signIn()}
                            >
                            <Text style={styles.buttonTextStyle}>Sign In</Text>
                        </Button>

                        <Button
                            block={true}
                            style={styles.buttonRegister}
                            onPress={() => this.redirect_register()}
                            >
                            <Text style={styles.buttonTextStyle}>Register</Text>
                        </Button>
                        {/* </Container> */}
                    </ScrollView>
                </ImageBackground>
            </Container>
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
        alignSelf: 'center'
    },
    buttonStyle: {
        margin: 30,
        width:150,
        backgroundColor: 'grey'
    },
    buttonTextStyle: {
        color: 'white'
    },

    buttonRegister:{
        width:150,
        // backgroundColor: 'grey',
        left : 200,
        top: 385.2,
        position : 'absolute'
    },

    logo: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 25,
        // marginBottom: 20,
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    headerStyle: {
        // paddingTop: 18,
        // marginTop: Platform.OS === "android" ? 18 : 0,
        backgroundColor: 'gray',
    },
    labelStyle: {
        color: 'white',
    },
    inputTextStyle: { 
        color: 'white' 
    },
    
});

export default Mains;