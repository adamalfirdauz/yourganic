import React from "react";
import { DrawerNavigator } from "react-navigation";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  AsyncStorage,
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
  Input
} from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationActions } from 'react-navigation'
import ImagePicker from 'react-native-image-picker'

var options = {
  title: 'Select Photo',
  takePhotoButtonTitle: 'Take a Photo',
  chooseFromLibraryButtonTitle: 'Choose from gallery',
  quality: 1
};

var axios = require('../api/axios.js');


export default class Provider extends React.Component {
  constructor(props) {
    super(props)
    //    console.error(data)
  }

  async fetchProfile() {
      const value = await AsyncStorage.getItem('user-profile');
      return value
  }

  async storeItem(key, item) {
    try {
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
        console.log(error.message);
    }
}

    async getToken(){
        const tokens = await AsyncStorage.getItem('access-token')
        return tokens
    }

  push(page, data){
    this.props.navigation.push(page, data)
    }
}
