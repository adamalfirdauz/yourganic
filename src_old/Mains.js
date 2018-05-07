import React from 'react'
import { 
    View, Text, StyleSheet, ImageBackground, Image, Platform,
    KeyboardAvoidingView, StatusBar
} from 'react-native';
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
                                onPress={() => this.redirect_signIn()}
                            >
                                <Text style={styles.buttonTextStyle}>Login</Text>
                            </Button>
                            <Button
                                block={true}
                                style={styles.buttonStyle}
                                onPress={() => this.redirect_register()}
                            >
                                <Text style={styles.buttonTextStyle}>Register</Text>
                            </Button>
                        </View>
                    </View>
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
    buttonStyle: {
        marginVertical: 10,
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
});

export default Mains;