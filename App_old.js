import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import { 
  Container, Header, Left, Body, Right, Button, Icon, 
  Title, Content, FooterTab, Footer, Form, Item, Input, Label
} from 'native-base';

import SignIn from './src/SignIn';
import Register from './src/Register';
import LogoTitle from './src/LogoTitle';
import Mains from './src/Mains';
import SideMenus from './src/SideMenus'
import HomeScreen from './src/HomeScreen/HomeScreen.js'

import StackNav from './src/Navigator/StackNav'
import LoginStackNav from './src/Navigator/LoginStackNav'
import DrawerNav from './src/Navigator/DrawerNav'

// import ReduxNavigation from './Navigation/ReduxNavigation'




export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.fetchProfile()
  }
  state = {
    fontLoaded: false,
    myProfile : false
  }

  async fetchProfile(){
    try {
      const value = await AsyncStorage.getItem('profile')
      let parsed  = JSON.parse(value)
      // console.error(parsed.data.nama)
      if (value !== null){
        // We have data!!
        // console.error(parsed.nama);
        this.setState({ myProfile: true });
      }
    } catch (error) {
      // Error retrieving data
      console.error("erro")
    }
  }

  render() {
    if(this.state.myProfile){
      return (
        <View style={styles.container}>
          <LoginStackNav />
        </View>
      );
    }
    else{
      // console.error(this.state.myProfile)
      return (
        <View style={styles.container}>
          <StackNav />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
