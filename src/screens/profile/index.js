import React from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Platform,
    KeyboardAvoidingView,
    StatusBar,
    AsyncStorage,
    ScrollView
} from "react-native";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right
} from "native-base";
import styles from './styles';
import { NavigationActions } from 'react-navigation'

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        var data = this.fetchProfile()
        this.state = {
            nama: '',
            email: '',
            hp: '',
            alamat: '',
            foto: 'a',
            icon: true
        }
        //    console.error(data)
    }
    async fetchProfile() {
        try {
            const value = await AsyncStorage.getItem('profile');
            let parsed = JSON.parse(value)
            if (value !== null) {
                this.setState({
                    nama: parsed.data.nama,
                    email: parsed.data.email,
                    hp: parsed.data.hp,
                    alamat: parsed.data.alamat,
                    foto: 'http://azizpc.codepanda.web.id/' + parsed.data.foto
                })
                if (this.foto !== null) {
                    this.setState({ icon: false })
                }
            }
        } catch (error) {
            // Error retrieving data
        }
    }
    async logOut() {
        // this.props.navigation.goBack({data:1})
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Prelogin' })],
            key: null
        }));
        await AsyncStorage.clear()
    }
    editProfile() {
        this.props.navigation.navigate('editProfile')
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}>
                <Header style={styles.headerStyle} androidStatusBarColor='#004600'>
                    <StatusBar barStyle="light-content" />
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Profile</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={{ flex: 1 }}>
                    <Content>
                        <Image
                            square
                            style={{
                                height: 120,
                                width: 110,
                                alignSelf: "center",
                                top: 20,
                                borderRadius: 100
                            }}
                            source={{
                                uri: this.state.foto
                            }} />
                        {/* <Icon active={this.state.icon} name="person" style={styles.photoProfile} /> */}
                        <Text style={styles.nama}>{this.state.nama}</Text>
                        <View style={styles.hairStyle} />
                        <View style={styles.row}>
                            <Icon name="mail" style={styles.emailIcon} />
                            <View >
                                <Text style={styles.email}>Email</Text>
                                <Text style={styles.emails}>{this.state.email}</Text>
                            </View>
                        </View>
                        <View style={styles.hairStyles} />
                        <View style={styles.row}>
                            <Icon name="ios-call" style={styles.phoneIcon} />
                            <View >
                                <Text style={styles.email}>Nomor Telepon</Text>
                                <Text style={styles.emails}>{this.state.hp}</Text>
                            </View>
                        </View>
                        <View style={styles.hairStyles} />
                        <View style={styles.row}>
                            <Icon name="bookmark" style={styles.addressIcon} />
                            <View >
                                <Text style={styles.email}>Alamat</Text>
                                <Text style={styles.emails}>{this.state.alamat}</Text>
                            </View>
                        </View>
                        <View style={styles.hairStyles} />
                        <Button
                            onPress={() => this.editProfile()}
                            block={true}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>Update Profile</Text>
                        </Button>
                        <Button
                            onPress={() => this.logOut()}
                            block={true}
                            style={styles.logoutbuttonStyle}>
                            <Text style={styles.logoutbuttonTextStyle}>Log Out</Text>
                        </Button>
                    </Content>
                </View>
            </Container>
        );
    }
}
