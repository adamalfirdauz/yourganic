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


var sayur = require('../../assets/image/sayur.png');
var resep = require('../../assets/image/resep.png');
var buah = require('../../assets/image/buah.png');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    // if(this.props.navigation.state.params.data == 1){
    //   this.props.navigation.goBack()
    // }
    // this.session(this.data)
    // this.fetchProfile();
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
      <Container style={{flex:1, backgroundColor:'white'}}>
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
        <Content style={styles.content}>
          <View style={styles.FlatList}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[
                { key: 'SAYURAN' },
                { key: 'BUAH' },
                { key: 'MENU SEHAT' },
              ]}
              renderItem={({ item }) => (
                <TouchableOpacity >
                  <Text style={styles.item}>{item.key}</Text>
                </TouchableOpacity>
              )
              }
            />
          </View>
          <Card style={styles.carding}>
            <Image style={styles.cardImage}
              source={sayur}
              />
          </Card>
          <Card style={styles.carding}>
            <Image style={styles.cardImage}
              source={buah}
              />
          </Card>
          <Card style={styles.carding}>
            <Image style={styles.cardImage}
              source={resep}
              />
          </Card>
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
    flex: 10
  },
  FlatList: {
    flex: 5,
    backgroundColor:'#007300',
  },
  carding: {
    margin: 20,
    marginLeft: 10,
    width : 360
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
  cardImage: {
    width: 360,
    height: 135,
    padding: 0,
    margin: 0,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logo: {
    // flex: 1,
    justifyContent: 'center',
    marginTop: 70,
    marginBottom: 50,
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  labelStyle: {
    color: 'white',
  },
  inputTextStyle: { 
    color: 'white' 
  },
  item: {
    // backgroundColor: '#004600',
    // borderRadius: 50,
    // paddingVertical: 3,
    paddingHorizontal:32,
    // marginTop:3,
    marginHorizontal:4,
    fontSize: 16,
    height: 32,
    color: 'white',
    fontWeight: 'bold'
  },
});