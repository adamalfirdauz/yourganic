import React from "react";
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
        this.state = {
            id: 1,
            sum: 0,
            barang: this.props.navigation.state.params.data
        };
        // var data = this.props.navigation.state.params.data
    }
    
    async storeItem(key, item) {
        try {
            var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
            return jsonOfItem;
        } catch (error) {
            console.log(error.message);
        }
    }

    async fetchProfile() {
        try {
            const value = await AsyncStorage.getItem('profile');
            let parsed = JSON.parse(value)
            if (value !== null) {
                // We have data!!
                // console.error(parsed.nama);
            }
        } catch (error) {
            // Error retrieving data
        }
    }
    incrementItem() {
        if(this.state.sum <6){
            this.setState({ sum: this.state.sum + 1 })
        }
        else{
            alert("Melebihi Batas, Max 6")
        }
    }
    decrementItem() {
        if (this.state.sum > 0)
            this.setState({ sum: this.state.sum - 1 })
    }

    checkOut(){
        this.storeItem('Barang'+0, this.state.barang)
        this.props.navigation.push('CheckOut', this.props.navigation.state.barang) 
    }
    
    render() {
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
                                <Icon name="cart" onPress={() => this.checkOut()}/>
                            </Button>
                        </Right>
                    </Header>

                </View>
                <Content style={styles.content}>
                <Text style={styles.item}>{this.props.navigation.state.params.data.title}</Text>
                    <Image source={resep} style={styles.images} />
                    <Card style={styles.card}>
                        <Text style={styles.disc}>Diskon 4%</Text>
                    </Card>
                    <Text style={styles.harga}>{this.props.navigation.state.params.data.price}</Text>
                    <View style={styles.hairStyles} />
                </Content>
                <Footer style={styles.footer}>
                    <TouchableOpacity style={{ paddingLeft: 3 }} onPress={() => this.decrementItem()}>
                        <Icon name="close" style={styles.minuss} />
                    </TouchableOpacity>
                    <Left>
                        <Body>
                            <Text style={styles.jumlah}>{this.state.sum}</Text>
                            <Text style={styles.troli}>Di Troli</Text>
                        </Body>
                    </Left>
                    <Right >
                        <Button style={styles.tambah} onPress={() => this.incrementItem()}>
                            <Icon name="add" />
                            <Text>Tambahkan</Text>
                        </Button>
                    </Right>
                </Footer>
            </Container>
        );
    }
}

export default ItemDetails;