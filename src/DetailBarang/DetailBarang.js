import React from "react";
import { DrawerNavigator } from "react-navigation";
import SignIn from '../SignIn';
import Register from '../Register';
import LogoTitle from '../LogoTitle';
import Mains from '../Mains';
import SideMenus from '../SideMenus'
import SideBar from "../SideBar/SideBar.js"; 
import { View,
  StyleSheet,
  ImageBackground,
  Image,
  Platform,
  KeyboardAvoidingView,
  StatusBar, 
  AsyncStorage,
  FlatList,
  TouchableOpacity
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
  Right,
  Footer
} from "native-base";
import {
  Col,
  Row,
  Grid
} from 'react-native-easy-grid';
import HorizontalItemList from '../Components/HorizontalItemList';
import ItemBanner from '../Components/ItemBanner';

var sayur = require('../../assets/image/sayur.png');
var resep = require('../../assets/image/resep.png');
var buah = require('../../assets/image/buah.png');
var strawberry = require('../../assets/image/card/fruit/strawberry.jpg');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resep: [require('../../assets/image/resep.png')],
      sayur: [require('../../assets/image/sayur.png')],
      buah: [require('../../assets/image/buah.png')],
      jumlah : 0
    };
  }
  
  session(data){
    try {
      AsyncStorage.setItem('profile', JSON.stringify(data));
    } catch (error) {
      // Error saving data
    }
  }

  async fetchProfile(){
    try {
      const value = await AsyncStorage.getItem('profile');
      let parsed  = JSON.parse(value)
      if (value !== null){
        // We have data!!
        // console.error(parsed.nama);
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  tambah(){
    this.setState({jumlah:this.state.jumlah+1 })
  }
  kurang(){
    if(this.state.jumlah>0)
    this.setState({jumlah:this.state.jumlah-1 })
  }

  render() {
    return (
      <Container style={{flex:1, backgroundColor:'#f6f6f6'}}>
        <View>
          <Header style={styles.headerStyle} androidStatusBarColor='#004600' noShadow>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("Home")}
              > 
                <Icon name="ios-arrow-back" style={{color:'green', fontSize: 40}} />
              </Button>
            </Left>
            <Body>
              {/* <Title>{this.props.navigation.state.params.title}</Title> */}
            </Body>
            <Right />
          </Header>
        </View>
        <Content style={styles.content}>
          <Image source={resep} style={styles.images}/>
          <Card style={styles.card}>
            <Text style={styles.disc}>Diskon 4%</Text>
          </Card>
          <Text style={styles.harga}>Rp26.000 </Text>
          <Text style={styles.item}>Brokoli Lokal</Text>
          <View style={styles.hairStyles}/>
        </Content>
        <Footer style={styles.footer}>
          <TouchableOpacity style={{paddingLeft:3}} onPress={() => this.kurang()}>
              <Icon name="close" style={styles.minuss}/>
          </TouchableOpacity>
        <Left>
          <Body>
            <Text style={styles.jumlah}>{this.state.jumlah}</Text>
            <Text style={styles.troli}>Di Troli</Text>
          </Body>
        </Left>
          <Right >
            <Button style={styles.tambah} onPress={() => this.tambah()}>
              <Icon name="add"/>
              <Text>
                Tambahkan
              </Text>
            </Button>
          </Right>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'transparent',
    padding: Platform.OS === "android" ? 20 : 0,
    paddingTop: 18,
    zIndex: 1,
    position: 'absolute'
  },
  content: {
    // flex: 10
  },
  images: {
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    // position : 'absolute',
  },
  disc:{
    color: 'white',
    padding: 5,
    paddingLeft: 12,
    paddingBottom: 2,
    fontSize: 12
  },
  card: {
    height : 28, 
    width : 80,
    borderRadius: 8,
    backgroundColor: '#e54d20'
  },
  harga : {
    paddingLeft : 5,
    paddingTop: 2,
    color : '#e54d20',
    fontSize: 20
  },
  item:{
    paddingLeft: 5,
    fontSize: 25,
    color : '#211e1e'
  },
  hairStyles: {
    backgroundColor: '#bababa',
    height: 0.5,
    width: 400,
    marginTop: 10,
    margin:0,
    marginBottom: 10
  },
  footer :{
    backgroundColor: 'white'
  },
  tambah : {
    marginRight:5,
    width : 180
  },
  jumlah :{
    paddingLeft:30,
    color:'#6d6a6a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  troli : {
    // position : 'absolute',
    paddingLeft : 25,
    // paddingTop: 30
  },
  bodi:{
    position: 'absolute',
    paddingLeft: 0,
    marginLeft: 0
  },
  minuss:{
    paddingLeft: 10,
    paddingTop: 15
  }

});