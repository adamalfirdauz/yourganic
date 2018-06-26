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
import styles from './styles.js';
import { NavigationActions } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';

import TrackCard from '../../theme/components/TrackCard';

export default class Transaksi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        profile: {
        nama: '',
        email: '',
      },
      buah: [require('../../../assets/image/card/fruit/banana.jpg')],
    };
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
    async getToken() {
        this.retrieveItem('access-token')
            .then((token) => {
                this.setState({
                    token: token
                });
                // console.error(this.state.token)
            })
            .catch((error) => {
                console.log('Terjadi kesalahan : ' + error);
            }
            );
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

    anotherPage(page){
        // this.storeItem('Barang'+0, this.state.barang)
        this.props.navigation.push(page) 
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
                        <Title>Transaksi</Title>
                    </Body>
                    <Right />
                </Header>
                
                    <View style={{ flex: 1 }}>
                        <Content>
                            <TouchableOpacity onPress = {()=> this.anotherPage('DetailTransaksi')}>
                                <TrackCard style={styles.TrackCard} data={this.state.buah} />
                            </TouchableOpacity>
                        </Content>
                    </View>
            </Container>
        );
    }
}
