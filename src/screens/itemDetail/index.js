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
    Footer
} from "native-base";
import {
    Col,
    Row,
    Grid
} from 'react-native-easy-grid';
import HorizontalItemList from '../../theme/components/HorizontalItemList';
import ItemBanner from '../../theme/components/ItemBanner';
import styles from './styles';

var resep = require('../../../assets/image/resep.png');


class ItemDetails extends React.Component {
    constructor(props) {
        super(props)
        this.parse()
        this.state = {
            id: 1,
            sum: 0,
            barang: this.props.navigation.state.params.data,
            exist: false,
            finished: false,
            image: 'https://yourganic.codepanda.web.id/'
        };
        this.data = [
            { time: '', title: 'Harga', description: 'Rp. ' + this.props.navigation.state.params.data.price + ' / ' + this.props.navigation.state.params.data.unit, icon: require('../../../assets/details/money.png') },
            { time: '', title: 'Deskripsi', description: this.props.navigation.state.params.data.description, icon: require('../../../assets/details/desc.png') },
        ]
        // var data = this.props.navigation.state.params.data
        //  console.error(this.state.barang)
    }

    async storeItem(key, item) {
        try {
            var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
            return jsonOfItem;
        } catch (error) {
            console.log(error.message);
        }
    }

    incrementItem() {
        if (this.state.sum < 6) {
            this.setState({ sum: this.state.sum + 1 })
        }
        else {
            alert("Melebihi Batas, Max 6")
        }
    }
    decrementItem() {
        if (this.state.sum > 0)
            this.setState({ sum: this.state.sum - 1 })
    }

    checkOut() {
        // this.storeItem('Barang'+0, this.state.barang)
        this.props.navigation.push('CheckOut')
    }

    tambahCart() {
        let targetPost = this.state.barang
        targetPost.jumlah = 1
        // console.error(targetPost)
        this.storeItem('Barang' + this.state.barang.id, targetPost)
        this.props.navigation.push('CheckOut')
    }

    confirm() {
        Alert.alert(
            'Apakah anda yakin ingin membeli barang ini?',
            '',
            [
                //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                { text: 'Tidak', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'Ya', onPress: () => this.tambahCart() },
            ],
            { cancelable: false }
        )
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

    render() {
        if (this.state.finished) {
            return (
                <Container style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                    <View>
                        <Header style={styles.header} noShadow>
                            <StatusBar
                                backgroundColor="#004600"
                                barStyle="light-content"
                            />
                            <Left>
                                <Button transparent onPress={() => this.props.navigation.goBack()}>
                                    <Icon name="arrow-back" />
                                </Button>
                            </Left>
                            <Body>
                                <Title>Detail</Title>
                            </Body>
                            <Right>
                                <Button transparent>
                                    {/* <Icon name="cart" onPress={() => this.props.navigation.push('CheckOut', this.props.navigation.state.params.data)}/> */}
                                    <Icon name="cart" onPress={() => this.checkOut()} />
                                </Button>
                            </Right>
                        </Header>

                    </View>
                    <Content style={styles.content}>
                        <Text style={styles.item}>{this.props.navigation.state.params.data.name}</Text>
                        <View style={styles.IconDetailFlex}>
                            <Icon style={styles.icons} name="nutrition" />
                            <Text style={styles.category}>{this.props.navigation.state.params.data.category}</Text>
                            <Icon style={styles.icons} name="heart" />
                            <Text style={styles.category}>{this.props.navigation.state.params.data.nutrition}</Text>
                        </View>
                        <Image style={styles.images}
                            source={{ uri: this.state.image + this.state.barang.img }}
                            onLoadEnd={this.onLoaded}
                        />
                        <Timeline
                            innerCircle={'icon'}
                            circleSize={25}
                            circleColor='#B2BEC3'
                            lineColor='#B2BEC3'
                            detailContainerStyle={{ marginBottom: 20, marginRight: 10, paddingLeft: 5, paddingRight: 5, backgroundColor: "#FFFFFF", borderRadius: 10 }}
                            descriptionStyle={{ paddingLeft: 8, color: '#B2BEC3', alignContent: 'space-around' }}
                            options={{
                                style: { paddingTop: 5 },
                                marginLeft: -37,
                            }}
                            data={this.data}
                        />
                    </Content>
                    {
                        this.state.exist || this.state.barang.stock == 0 ?
                            <View />
                            : <Footer style={styles.footer}>
                                <Button style={styles.tambahButton} onPress={() => this.confirm()}>
                                    <Text style={styles.ButtonWord}>+ Tambahkan</Text>
                                </Button>
                            </Footer>
                    }
                    {
                        this.state.exist == false && this.state.barang.stock == 0 ?
                            <Footer style={styles.footers}>
                                {/* <Card style={styles.habis} > */}
                                    <Text style={styles.ButtonWords}>Barang Sudah Habis</Text>
                                {/* </Card> */}
                            </Footer>
                            :
                            <View />

                    }
                    {/* <Image  source={{ uri: this.state.image + this.props.navigation.state.params.data.img }}/> */}
                </Container>
            );
        }
        else {
            return (
                <View style={{ paddingTop: 250, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
    }
}

export default ItemDetails;