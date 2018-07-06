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

class Guest extends React.Component {
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
                            <Title>Guest</Title>
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
                </Content>
            </Container>
        );

    }
    
}

export default Guest;