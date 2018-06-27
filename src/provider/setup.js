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
import styles from './styles';

var options = {
  title: 'Select Photo',
  takePhotoButtonTitle: 'Take a Photo',
  chooseFromLibraryButtonTitle: 'Choose from gallery',
  quality: 1
};

var axios = require('../../api/axios.js');


export default class UpdateProfile extends React.Component {
  constructor(props) {
    super(props)
    //    console.error(data)
  }

  async fetchProfile() {
    try {
      const value = await AsyncStorage.getItem('user-profile');
      let parsed = JSON.parse(value)
      if (value !== null) {
        // We have data!!
        this.setState({
          id: parsed.id,
          nama: parsed.name,
          email: parsed.email,
          hp: parsed.phone,
          alamat: parsed.address,
        })
      }
      const tokens = await AsyncStorage.getItem('access-token');
      if(tokens){
        const token = JSON.stringify(tokens)
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  async storeItem(key, item) {
    try {
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
        console.log(error.message);
    }
}

  update() {
    console.error(this.state)
  }

  push(page, data){
      this.props.navigate.push(page, data)
  }
}