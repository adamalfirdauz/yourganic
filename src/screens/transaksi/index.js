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
    Alert,
    ActivityIndicator
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
import Provider from '../../provider/setup.js'

var axios = require('../../api/axios.js');

export default class Transaksi extends React.Component {
    constructor(props) {
        super(props)
        provider = new Provider()
        this.state = {
                token :null,
                data : [],
                buah: [require('../../../assets/image/card/fruit/banana.jpg')],
                loading : true
            }
    // this.getToken()
    this.fetchStuff()
    }

    getToken(){
      }

    fetchStuff(){
        provider.getToken().then((value) => {
            //this callback is executed when your Promise is resolved
            this.setState({loading :true})
            let parsed = JSON.parse(value)
            this.setState({
              token : parsed
            })
            axios.get('/api/transaction/getAll',{
                headers: {
                    Accept: 'application/json',
                    'Authorization' : 'Bearer ' + parsed
                },
            }).then(response => {
                if(response.data.data){
                    // console.error(response.data.data)
                    // this.setState({barang : response.data.data})
                    // console.error(this.state.barang)
                    // console.error(this.state.barang)
                    this.setState({
                        data : response.data,
                        loading: false
                    })
                    }
                else{
                    alert("Koneksi gagal, muat ulang halaman ini")
                    this.setState({ loading: false })

                }
            }).catch( error => {
                alert("Koneksi gagal, muat ulang halaman ini")
                // this.setState({loading: false})
                console.error(error)    
                
            });
        }).catch((error) => {
            console.log('Terjadi kesalahan : ' + error);
            console.error('kososng')
        });
    }

    anotherPage(page){
        // this.storeItem('Barang'+0, this.state.barang)
        this.props.navigation.push(page) 
    }

    

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}>
                { this.state.loading ?
                <View style={{paddingTop:250 ,alignSelf: 'center',justifyContent: 'center', position: 'absolute'}}>
                    <ActivityIndicator size="large"/>
                </View>
                :
                <View />
                }
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
                    <Right>
                        <Button transparent>
                            <Icon name="refresh" onPress={() => this.fetchStuff()}/>
                        </Button>
                    </Right>
                </Header>
                
                    <View style={{ flex: 1 }}>
                        <Content>
                            {/* <TouchableOpacity onPress = {()=> this.anotherPage('DetailTransaksi')}> */}
                                <TrackCard style={styles.TrackCard} data={this.state.data} navigation={this.props.navigation}/>
                            {/* </TouchableOpacity> */}
                        </Content>
                    </View>
            </Container>
        );
    }
}
