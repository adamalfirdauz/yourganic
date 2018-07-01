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
import ItemBanner from '../../theme/components/ItemBanner';
import styles from './styles';

var bni = require('../../../assets/bank/bni.png')
var mandiri = require('../../../assets/bank/mandiri.jpg')
var bri = require('../../../assets/bank/bri.png')
var bca = require('../../../assets/bank/bca.png')
var sc = require('../../../assets/bank/sc.jpg')

class KonfirmasiPembayaran extends React.Component {
    constructor(props) {
        super(props)
        // console.error(this.props.navigation.state.params)
        this.data = [
            {time: '', title: 'Check-out', description: 'Bayar produk segar anda segera.', color: 'green', icon: require('../../../assets/details/yes.png')},
            {time: '', title: 'Dibayar', description: 'Pesanan telah dibayar, kami akan segera mengirim produk segar kerumah anda', color: 'green', icon: require('../../../assets/details/yes.png')},
            {time: '', title: 'Pengiriman', description: 'Pesanan dalam proses pengiriman melalui jasa ekspedisi terbaik kerumah anda', color: 'red', icon: require('../../../assets/details/no.png')},
            {time: '', title: 'Selesai', description: 'Pesanan telah sampai, kami menanti pesanan anda selanjutnya.' , color: 'red', icon: require('../../../assets/details/no.png')},
        ]
    }

    toAnother(page, data){
        this.props.navigation.push(page, data)
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
                        {/* <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="arrow-back" />
                            </Button>
                        </Left> */}
                        <Body>
                            <Title>Pembayaran</Title>
                        </Body>
                        <Right>
                            {/* <Button transparent> */}
                                {/* <Icon name="cart" onPress={() => this.props.navigation.push('CheckOut', this.props.navigation.state.params.data)}/> */}
                                {/* <Icon name="cart" onPress={() => this.checkOut()}/> */}
                            {/* </Button> */}
                        </Right>
                    </Header>

                </View>
                <Content style={styles.content}>
                <List>
                    <Text style={styles.bayarDesc}>Jumlah Tagihan</Text>
                    <Text style={styles.bayarNum}>Rp{this.props.navigation.state.params.total}</Text>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail style={styles.images} source={bni} />
                        </Left>
                        <Body>
                            <Text>Bank Negara Indonesia,</Text>
                            <Text>Jakarta</Text>
                            <Text note>023 827 2088</Text>
                            <Text note>a.n PT Yourganic Sejahtera</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail style={styles.images} source={mandiri} />
                        </Left>
                        <Body>
                            <Text>Bank Mandiri,</Text>
                            <Text>Jakarta</Text>
                            <Text note>0700 000 899 992</Text>
                            <Text note>a.n PT Yourganic Sejahtera</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail style={styles.images} source={bri} />
                        </Left>
                        <Body>
                            <Text>Bank Rakyat Indonesia,</Text>
                            <Text>Jakarta</Text>
                            <Text note>034 101 000 743 303</Text>
                            <Text note>a.n PT Yourganic Sejahtera</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail style={styles.images} source={bca} />
                        </Left>
                        <Body>
                            <Text>Bank Central Asia,</Text>
                            <Text>Jakarta</Text>
                            <Text note>731 025 2527</Text>
                            <Text note>a.n PT Yourganic Sejahtera</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail style={styles.images} source={sc} />
                        </Left>
                        <Body>
                            <Text>Standard Chartered Bank,</Text>
                            <Text>Jakarta</Text>
                            <Text note>024 113 1023</Text>
                            <Text note>a.n PT Yourganic Sejahtera</Text>
                        </Body>
                    </ListItem>
                </List>
                </Content>
                <Footer style={styles.footer}>
                    <Button style={styles.confirmButton} onPress={() => this.toAnother("DetailTransaksi", this.props.navigation.state.params)}>
                        <Text style={styles.ButtonWord}>Konfirmasi</Text>
                    </Button>
                </Footer>
            </Container>
        );

    }
    
}

export default KonfirmasiPembayaran;