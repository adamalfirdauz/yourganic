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
    Picker,
    Alert
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

var resep = require('../../../assets/image/resep.png');

class DetailTransaksi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            barang: [],
            isReady :false,
            jumlah : 0,
            sum : 0,
            panjang: 0,
            total : 0
           }
    }
    render() {
        return(
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
                </Header>
            </View>
        )

    }
    
}

export default DetailTransaksi;