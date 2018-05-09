import React from "react";
import { AppRegistry, Image, StatusBar, AsyncStorage } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "Profile"];
export default class SideBar extends React.Component {

  constructor(props) {
    super(props)
    var data = this.fetchProfile()
    // console.error(this.state.foto)
  }

  state = {
    foto : 'a'
}

  async fetchProfile(){
    try {
      const value = await AsyncStorage.getItem('profile');
      let parsed  = JSON.parse(value)
      if (value !== null){
        // We have data!!
        this.setState({foto : 'http://azizpc.codepanda.web.id/'+parsed.data.foto})
        return parsed
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20,
              borderRadius: 80
            }}
            source={{
              uri: this.state.foto
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}