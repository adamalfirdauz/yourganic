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
    ScrollView,
    TouchableOpacity,
    Alert
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
import { NavigationActions } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import Provider from '../../provider/setup.js'

var options = {
    title: 'Select Photo',
    takePhotoButtonTitle: 'Take a Photo',
    chooseFromLibraryButtonTitle: 'Choose from gallery',
    quality: 1
};
var axios = require('../../api/axios.js');
var man = require('./man.png');
var gambar = null

var BUTTONS = [
    { text: "Cancel", icon: "close", iconColor: "#25de5b" },
    { text: "LogOut", icon: "trash", iconColor: "#fa213b" },
];
// var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 0;

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        provider = new Provider()
        this.state = {
            nama: '',
            email: '',
            hp: '',
            alamat: '',
            foto: 'default',
            icon: true,
            token: null,
            imageSource: null
        }
        //    console.error(data)
        this.getProfile()
        this.retrieveToken()
    }
    async retrieveItem(key) {
        try {
            const retrievedItem = await AsyncStorage.getItem(key);
            const item = JSON.parse(retrievedItem);
            return item;
        } catch (error) {
            console.log(error.message);
        }
        return
    }

    async retrieveToken() {
        const tokens = await AsyncStorage.getItem('access-token');
        if (tokens) {
            this.setState({
                token: JSON.parse(tokens)
            })
        }
    }

    getProfile(){
        provider.fetchProfile().then((value)=>{
          let parsed = JSON.parse(value)
          if (value !== null) {
            // We have data!!
            if(parsed.img == 'storage/'){
                this.setState({
                    id: parsed.id,
                    nama: parsed.name,
                    email: parsed.email,
                    hp: parsed.phone,
                    alamat: parsed.address,
                    imageSource: null
                  })
            }
            else{
                this.setState({
                    id: parsed.id,
                    nama: parsed.name,
                    email: parsed.email,
                    hp: parsed.phone,
                    alamat: parsed.address,
                    imageSource: parsed.img
                  })
            }
          }
        }).catch((error)=>{
          console.error(error)
        })
      }

    async logOut() {
        axios.post('/api/logout', {}, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
            },
        })
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Prelogin' })],
            key: null
        }));
        await AsyncStorage.clear()
    }

    confirm() {
        Alert.alert(
            'Apakah anda yakin ingin keluar?',
            'Semua data anda saat ini akan dihapus',
            [
            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Tidak', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Ya', onPress: () => this.logOut()},
            ],
            { cancelable: false }
          )
    }

    editProfile() {
        // this.props.navigation.navigate('editProfile', 'onGoBack : () => this.getProfile()')
        this.props.navigation.navigate('editProfile', {name: 'from parent', onSelect: this.getProfile.bind(this)});
    }

    selectPhoto() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.error('ImagePicker Error: ', response.error);
            } else {
                let source = {
                    uri: response.uri
                }
                this.setState({
                    imageSource: source
                })
            }
        })
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
                            {this.state.imageSource !== null ?
                                <Image
                                    square
                                    style={{
                                        height: 120,
                                        width: 110,
                                        alignSelf: "center",
                                        top: 20,
                                        borderRadius: 100
                                    }}
                                    source={{uri :'https://yourganic.codepanda.web.id/'+this.state.imageSource}} />
                                :
                                <Icon name='person' style={{ fontSize: 120, alignSelf: 'center', paddingTop: 20, }} />}
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
                            // onPress={() => this.editProfile()}
                            onPress={() => this.editProfile()}
                            block={true}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>Update Profile</Text>
                        </Button>
                        <Button
                            onPress={() => this.confirm()}
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
