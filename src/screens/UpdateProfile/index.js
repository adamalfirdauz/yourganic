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
  TouchableOpacity,
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
    var data = this.fetchProfile()
    //    console.error(data)
  }
  state = {
    id: '',
    nama: '',
    email: '',
    hp: '',
    alamat: '',
    token: '',
    imageSource: null,
    loading: false
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
        this.setState({
          token : JSON.parse(tokens)
        })
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
  selectPhoto() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      }
      else {
        let source = { uri: response.uri }
        this.setState({ imageSource: source })
        // console.error(gambar.uri)
      }
    })
  }

  updateProfile() {
    this.setState({ loading: true })
    axios.post('/api/profile/update',
    {
        name: this.state.nama,
        phone: this.state.hp,
        address: this.state.alamat
    },{
        headers: {
            Accept: 'application/json',
            'Authorization' : 'Bearer ' + this.state.token
        },
    }).then(response => {
        if(response.data){
            // console.error(response.data)
            this.storeItem('user-profile',response.data.data)
            alert("Update Berhasil")
            this.props.navigation.pop()
          }
        else{
            alert("Login gagal, periksa email dan password anda")
            this.setState({ loading: false })
        }
    }).catch( error => {
        alert("Login Gagal, periksa email dan password anda")
        this.setState({loading: false})
        console.error(error)    
        
    });
}

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Header style={styles.headerStyle} androidStatusBarColor='#004600'>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()
              }
            >
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ flex: 1 }}>
          <Content>
          { this.state.loading ?
          <View style={{paddingTop:250 ,alignSelf: 'center',justifyContent: 'center', position: 'absolute'}}>
                    <ActivityIndicator size="large"/>
          </View>
          :
          <View />
          }
            <TouchableOpacity onPress={this.selectPhoto.bind(this)}>
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
                source={this.state.imageSource} />
                :
              <Icon name='person' style={{ fontSize: 120, alignSelf: 'center', paddingTop: 20, }} />}
            </TouchableOpacity>
            <Input onChangeText={(nama) => this.setState( {nama} )} style={styles.nama}>{this.state.nama}</Input>
            <View style={styles.hairStyle} />
            <View style={styles.row}>
              <Icon name="mail" style={styles.emailIcon} />
              <View >
                <Text style={styles.email}>Email</Text>
                <Text onChangeText={(email) => this.setState({ email })} style={styles.emails}>{this.state.email}</Text>
              </View>
            </View>
            <View style={styles.hairStyles} />
            <View style={styles.row}>
              <Icon name="ios-call" style={styles.phoneIcon} />
              <View >
                <Text style={styles.email}>Nomor Telepon</Text>
                <Input keyboardType={"numeric"} onChangeText={(hp) => this.setState({ hp })} style={styles.emails}>{this.state.hp}</Input>
              </View>
            </View>
            <View style={styles.hairStyles} />
            <View style={styles.row}>
              <Icon name="bookmark" style={styles.addressIcon} />
              <View >
                <Text style={styles.email}>Alamat</Text>
                <Input onChangeText={(alamat) => this.setState({ alamat })} style={styles.emails}>{this.state.alamat}</Input>
              </View>
            </View>
            <View style={styles.hairStyles} />
            <Button
              onPress={() => this.updateProfile()}
              block={true}
              style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>Simpan</Text>
            </Button>
          </Content>
        </View>
      </Container>
    );
  }
}