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
  Right
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
      buah: [require('../../assets/image/buah.png')]
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

  render() {
    return (
      <Container style={{flex:1, backgroundColor:'#f6f6f6'}}>
        <View>
          <Header style={styles.headerStyle} androidStatusBarColor='#004600' noShadow>
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
          <View style={styles.FlatList}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[
                { key: 'SAYURAN' },
                { key: 'BUAH' },
                { key: 'MENU SEHAT' },
                { key: 'SAYURAN' },
                { key: 'BUAH' },
                { key: 'MENU SEHAT' },
              ]}
              renderItem={({ item }) => (
                <TouchableOpacity >
                  <Text style={styles.item}>{item.key}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <Content style={styles.content}>
          <HorizontalItemList/>
          <ItemBanner data={this.state.resep}/>
          <HorizontalItemList />
          <ItemBanner data={this.state.sayur}/>
          <HorizontalItemList/>
          <ItemBanner data={this.state.buah}/>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#007300',
    padding: Platform.OS === "android" ? 20 : 0,
    paddingTop: 18,
  },
  content: {
    // flex: 10
  },
  FlatList: {
    // flex: 5,
    backgroundColor:'#007300',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  titleStyle: {
    fontSize: 25,
    color: 'white',
    // alignItems: 'center',
    alignSelf: 'center'
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: 'white'
  },
  carding: {
    margin: 0,
    padding: 5,
    borderWidth: 0,
    borderColor: 'white',
  },
  cardImage: {
    resizeMode:'cover',
    height: 130,
    padding: 0,
    margin: 0,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cardTitleStyle: {
    paddingHorizontal: 5,
    color: '#007300',
    fontWeight:'100',
    fontSize: 14.5
  },
  cardPriceStyle: {
    paddingHorizontal: 5,
    color: '#47a337',
    fontWeight: '100',
    fontSize: 13.5
  },
  labelStyle: {
    color: 'white',
  },
  inputTextStyle: { 
    color: 'white' 
  },
  item: {
    paddingHorizontal:16,
    marginHorizontal:4,
    fontSize: 16,
    height: 32,
    color: 'white',
    fontWeight: 'bold'
  },
});