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
    Alert,
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
    Footer,
    Input,
    Item
} from "native-base";
import {
    Col,
    Row,
    Grid
} from 'react-native-easy-grid';
import HorizontalItemList from '../../theme/components/HorizontalItemList';
import ItemBanner from '../../theme/components/ItemBanner';
import ItemCard from '../../theme/components/ItemCard';
import styles from './styles';
import style from "../sidebar/style";

var resep = require('../../../assets/image/resep.png');
var axios = require('../../api/axios.js');


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.parse()
        this.state = {
            id: 1,
            sum: 0,
            barang: [],
            kosong: false,
            exist: false,
            finished: false,
            loading: false,
            image: 'https://yourganic.codepanda.web.id/'
        };
        // var data = this.props.navigation.state.params.data
    }

    async parse() {
        let items = null
        var total = 0
        var j = 0
        for (var i = 0; i < 15; i++) {
            try {
                const retrievedItem = await AsyncStorage.getItem('Barang' + i);
                if (retrievedItem != null) {
                    items = JSON.parse(retrievedItem)
                    if (this.state.barang.id === items.id) {
                        this.setState({ exist: true })
                    }
                }
                this.setState({ finished: true })
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    search(search) {
        this.setState({ loading: true })
        axios.post('/api/product/search',
            {
                search: search
            }, {
                headers: {
                    Accept: 'application/json'
                },
            }).then(response => {
                // console.error(this.props.navigation.state.params.id)
                if (response.data) {
                    this.setState({
                        barang : []
                    })
                    // console.error(response.data)
                    // this.storeItem('user-profile',response.data.data)
                    // provider.storeItem('user-profile', response.data.data)
                    if(response.data.data.length == 0){
                        this.setState({kosong :  true, loading: false})
                    }
                    else{
                        this.setState({
                            kosong: false,
                            barang: response.data.data,
                            loading : false
                        })
                    }
                    // console.error(this.state.barang)
                }
                else {
                    this.setState({ 
                        loading: false 
                    })
                }
            }).catch(error => {
                alert("Login Gagal, periksa email dan password anda")
                this.setState({ loading: false })
                console.error(error)

            });
    }

    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                <View>
                    <Header searchBar noShadow rounded style={styles.header} androidStatusBarColor='#004600'>
                        <Item>
                            <Icon name="arrow-back" onPress={() => this.props.navigation.pop()} />
                            <Icon name="ios-search" />
                            <Input placeholder="Search"
                                onChangeText={(search) => this.search(search)}
                            />
                        </Item>
                        <Button transparent>
                        </Button>
                    </Header>
                </View>
                <Content style={styles.content}>
                    { this.state.kosong ?
                        <Text style={{alignSelf:'center'}}>Barang Tidak Ditemukan</Text>  
                    :
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        data={this.state.barang}
                        renderItem={({ item }) => (
                            <ItemCard data={item} navigation={this.props.navigation} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />}
                </Content>
                {this.state.loading ?
                    <View style={{ paddingTop: 250, alignSelf: 'center', justifyContent: 'center', position: 'absolute' }}>
                        <ActivityIndicator size="large" />
                    </View>
                    :
                    <View />
                }
            </Container>
        );
    }
}

export default Search;