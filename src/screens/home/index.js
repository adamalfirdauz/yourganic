import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  AsyncStorage,
  FlatList,
  TouchableOpacity, BackHandler,
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
import HorizontalItemList from '../../theme/components/HorizontalItemList';
import ItemBanner from '../../theme/components/ItemBanner';
import styles from './styles';

var sayur = require('../../../assets/image/sayur.png');
var resep = require('../../../assets/image/resep.png');
var buah = require('../../../assets/image/buah.png');
var strawberry = require('../../../assets/image/card/fruit/strawberry.jpg');
var axios = require('../../api/axios.js');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.fetchProfile()
    this.state = {
      profile: {
        nama: '',
        email: '',
      },
      resep: [require('../../../assets/image/resep.png')],
      sayur: [require('../../../assets/image/sayur.png')],
      buah: [require('../../../assets/image/buah.png')],
      barang: [],
      loading: true
    };
    this.fetchStuff()
  }
  async fetchProfile() {
    try {
      const value = await AsyncStorage.getItem('profile');
      let parsed = JSON.parse(value)
      if(value !== null){
        this.setState({
          profile:{
            nama: parsed.data.nama,
            email: parsed.data.email,
          }
        })
      }
    } catch (error) {
      console.error("error")
    }
  }

  fetchStuff(){

    // this.setState({ loading: true })
    axios.get('/api/product/getAll',{
        headers: {
            Accept: 'application/json',
            // 'Authorization' : 'Bearer ' + this.state.token
        },
    }).then(response => {
        if(response.data){
            this.setState({barang : response.data.data, loading : false})
            // console.error(this.state.barang)
            // console.error(this.state.barang)
            }
        else{
            alert("Koneksi gagal")
            this.setState({ loading: false })
        }
    }).catch( error => {
        alert("Koneksi gagal")
        // this.setState({loading: false})
        console.error(error)    
        
    });
}

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
        <View>
          <Header style={styles.headerStyle} androidStatusBarColor='#004600' noShadow >
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
              <Title>Home</Title>
            </Body>
            <Right />
          </Header>
        </View>
        <Content style={styles.content}>
          <ItemBanner data={this.state.resep} />
          <HorizontalItemList title="Resep Sehat" data={this.state.barang} navigation={this.props.navigation} />
          <ItemBanner data={this.state.buah} />
          <HorizontalItemList title="Sayuran Organik" data={this.state.barang} navigation={this.props.navigation} />
          <ItemBanner data={this.state.sayur} />
          <HorizontalItemList title="Buah Organik" data={this.state.barang} navigation={this.props.navigation} />
          <ItemBanner data={this.state.resep} />
        </Content>
        { this.state.loading ?
          <View style={{paddingTop:250 ,alignSelf: 'center',justifyContent: 'center', position: 'absolute'}}>
              <ActivityIndicator size="large"/>
          </View>
          :
          <View />
        }
      </Container>
    );
  }
}
