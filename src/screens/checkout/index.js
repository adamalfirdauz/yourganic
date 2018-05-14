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
    TouchableOpacity,
    Picker
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

class CheckOut extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sum: 0,
            jumlah :1
           };
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
                            <Title>Shopping Cart</Title>
                        </Body>
                    </Header>
                </View>
                <Content style={styles.content}>
                    <Text style={styles.shoppingBag}>
                        YOUR SHOPPING BAG
                    </Text>
                    <Text style={styles.reviews}>
                        Review 2 items Rp2.0000
                    </Text>
                    <Card style={{padding:0, margin:0}}>

                        <FlatList
                            data={[
                                {
                                    title: "Strawberry",
                                    price: "10.000",
                                    unit: "250 gr",
                                    jumlah: 2,
                                    key: 'strawberry',
                                    image: require('../../../assets/image/card/fruit/strawberry.jpg'),
                                }, {
                                    title: "Banana",
                                    price: "15.000",
                                    unit: "500 gr",
                                    jumlah: 2,
                                    key: 'banana',
                                    image: require('../../../assets/image/card/fruit/banana.jpg'),
                                }
                            ]}
                            renderItem={({ item }) => (
                                <CardItem transparent>
                                    <Image style={styles.itemCardImage}
                                        source={item.image}
                                    />
                                    <View style={{ flexDirection: 'column', }}>
                                        <Text style={styles.itemCardTitle}>{item.title}</Text>
                                        <Text style={styles.itemCardPrice}>Rp {item.price}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', }}>
                                        <TouchableOpacity>
                                            <Icon name='close' style={{ marginLeft: 180 }} />
                                        </TouchableOpacity>
                                        <Picker
                                            selectedValue={this.state.jumlah}
                                            style={{ height: 20, width: 73, marginLeft: 140, paddingLeft: 20}}
                                            onValueChange={(itemValue, itemIndex) => this.setState({jumlah : itemValue})}
                                            >
                                            <Picker.Item label="0" value="0"  />
                                            <Picker.Item label="1" value="1" />
                                            <Picker.Item label="2" value="2" />
                                            <Picker.Item label="3" value="3" />
                                            <Picker.Item label="4" value="4" />
                                            <Picker.Item label="5" value="5" />
                                            <Picker.Item label="6" value="6" />
                                        </Picker>
                                    </View>
                                </CardItem>
                            )}
                        />
                        <View style={styles.hairStyles}/>
                        <View style={{ flexDirection: 'row'}}>
                            <Text style={styles.shipping} >Shipping</Text>
                            <Text style={styles.priceShipping} >Rp46.000</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Text style={styles.shipping} >SubTotal</Text>
                            <Text style={styles.priceShipping} >Rp46.000</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Text style={styles.shipping} >Total</Text>
                            <Text style={styles.priceTotal} >Rp46.000</Text>
                        </View>
                        <View style={styles.hairStyles}/>
                        <View style={{ flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row'}}>
                                    <Icon name="arrow-dropleft" style={{marginLeft: 10, fontSize: 24, marginTop:10, color:'#636568'}}/>
                                    <Text style={{marginLeft: 10, marginTop: 10, color:'#636568'}}>Continue Shipping</Text>
                                </View>
                            </TouchableOpacity>
                            <Button transparent style={{borderRadius:80, borderColor:'black', borderWidth:2,  marginLeft: 100, marginBottom: 10}}>
                                <Text style={{color:'black'}}>CHECKOUT</Text> 
                            </Button>
                        </View>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default CheckOut;