import React from "react";
import Timeline from 'react-native-timeline-listview'
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
    TouchableOpacity,
    Picker,
    Alert
} from "react-native";
import {
    Container,
    Thumbnail,
    Content, 
    List, 
    ListItem, 
    Button,
    Text,
    Card,
    CardItem,
    Body,
    Header,
    Title,
    Left,
    Icon,
    Right,
    Footer, 
    Input
} from "native-base";
import {
    Col,
    Row,
    Grid
} from 'react-native-easy-grid';
import HorizontalItemList from '../../theme/components/HorizontalItemList';
import ItemCard from '../../theme/components/ItemCard';
import styles from './styles';

var axios = require('../../api/axios.js');

class Guest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            barang: [],
            loading: true
        };
    this.fetchStuff() 
    }

    fetchStuff() {
        // this.setState({ loading: true })
        axios.get('/api/product/getAll', {
          headers: {
            Accept: 'application/json',
            // 'Authorization' : 'Bearer ' + this.state.token
          },
        }).then(response => {
          if (response.data) {
            this.setState({ barang: response.data.data, loading: false })
            // console.error(this.state.barang)
            // console.error(this.state.barang)
          }
          else {
            alert("Koneksi gagal")
            this.setState({ loading: false })
          }
        }).catch(error => {
          alert("Koneksi gagal")
          // this.setState({loading: false})
          console.error(error)
        });
      }
      loginNavigate() {
        this.props.navigation.navigate('Login')
    }

    render() {
        return(
            <Container style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View>
                    <Header style={styles.header} noShadow>
                        <StatusBar
                            backgroundColor="#004600"
                            barStyle="light-content"
                        />
                        <Body>
                            <Title>Home</Title>
                        </Body>
                        <Right>
                        </Right>
                    </Header>

                </View>
                <Content style={styles.content}>
                {/* {console.error(this.state.barang)} */}
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        data={this.state.barang}
                        renderItem={({ item }) => (
                            <ItemCard data={item} navigation={this.props.navigation} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </Content>
                <Footer style={styles.footer}>
                    <TouchableOpacity onPress={()=>this.loginNavigate()}>
                        <Text style={{ color: 'white', alignSelf: 'center', marginTop:15 }}>Login</Text>
                    </TouchableOpacity>
                </Footer>
            </Container>
        );

    }
    
}

export default Guest;