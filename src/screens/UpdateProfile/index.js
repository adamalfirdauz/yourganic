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
import Provider from '../../provider/setup.js'
import RNFetchBlob from 'rn-fetch-blob'

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
    provider = new Provider()
    //    console.error(data)
    this.getProfile()
    this.getToken()
  }
  state = {
    id: '',
    nama: '',
    email: '',
    hp: '',
    alamat: '',
    token: '',
    imageSource: null,
    loading: false,
    gambar: false,
    img: null
  }

  getToken() {
    provider.getToken().then((value) => {
      //this callback is executed when your Promise is resolved
      let parsed = JSON.parse(value)
      this.setState({
        token: parsed
      })
    }).catch((error) => {
      console.log('Terjadi kesalahan : ' + error);
    });
  }

  getProfile() {
    provider.fetchProfile().then((value) => {
      let parsed = JSON.parse(value)
      if (value !== null) {
        // We have data!!
        this.setState({
          id: parsed.id,
          nama: parsed.name,
          email: parsed.email,
          hp: parsed.phone,
          alamat: parsed.address,
          imageSource: parsed.img,
        })
      }
    }).catch((error) => {
      console.error(error)
    })
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
        this.setState({ imageSource: source, gambar: true })
        // console.error(gambar.uri)
      }
    })
  }

  updateProfile() {
    this.setState({ loading: true })
    this.uploadPhoto()
    axios.post('/api/profile/update',
      {
        name: this.state.nama,
        phone: this.state.hp,
        address: this.state.alamat
      }, {
        headers: {
          Accept: 'application/json',
          'Authorization': 'Bearer ' + this.state.token
        },
      }).then(response => {
        if (response.data) {
          // console.error(response.data)
          // this.storeItem('user-profile',response.data.data)
          provider.storeItem('user-profile', response.data.data)
          alert("Update Berhasil")
          this.back()
        }
        else {
          alert("Login gagal, periksa email dan password anda")
          this.setState({ loading: false })
        }
      }).catch(error => {
        alert("Login Gagal, periksa email dan password anda")
        this.setState({ loading: false })
        console.error(error)

      });
  }

  back() {
    this.props.navigation.state.params.onSelect
    this.props.navigation.goBack()
  }

  uploadPhoto() {
    if (this.state.gambar) {
      this.setState({
        loading: true
      })
      RNFetchBlob.fetch('POST', 'http://yourganic.codepanda.web.id/api/profile/update', {
        'Authorization': 'Bearer ' + this.state.token,
        // 'Content-Type': 'multipart/form-data',
      }, [
          { name: 'img', filename: 'image.jpg', type: 'image/png', data: RNFetchBlob.wrap(this.state.imageSource.uri) },
        ]).then((resp) => {
          let dataku = JSON.parse(resp.data)
          provider.storeItem('user-profile', dataku.data)
        }).catch((err) => {
          console.error(err)
        })
    }
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Header style={styles.headerStyle} androidStatusBarColor='#004600'>
          <Left>
            <Button
              transparent
              onPress={() => this.back()
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
            {this.state.loading ?
              <View style={{ paddingTop: 250, alignSelf: 'center', justifyContent: 'center', position: 'absolute' }}>
                <ActivityIndicator size="large" />
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
                  source={!this.state.gambar ? { uri: "http://yourganic.codepanda.web.id/" + this.state.imageSource } : this.state.imageSource} />
                :
                <Icon name='person' style={{ fontSize: 120, alignSelf: 'center', paddingTop: 20, }} />}
            </TouchableOpacity>
            <Input onChangeText={(nama) => this.setState({ nama })} style={styles.nama}>{this.state.nama}</Input>
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