import React from "react";
import Timeline from 'react-native-timeline-listview'
import ImagePicker from 'react-native-image-picker';
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
var options = {
    title: 'Select Photo',
    takePhotoButtonTitle: 'Take a Photo',
    chooseFromLibraryButtonTitle: 'Choose from gallery',
    quality: 1
};

class DetailTransaksi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageSource: null
        }
        this.data = [
            {time: '', title: 'Check-out', description: 'Bayar produk segar anda segera.', color: 'green', icon: require('../../../assets/details/yes.png')},
            {time: '', title: 'Dibayar', description: 'Pesanan telah dibayar, kami akan segera mengirim produk segar kerumah anda', color: 'green', icon: require('../../../assets/details/yes.png')},
            {time: '', title: 'Pending', description: 'Pembayaran sedang dikonfirmasi oleh sistem', color: 'green', icon: require('../../../assets/details/yes.png')},
            {time: '', title: 'Pengiriman', description: 'Pesanan dalam proses pengiriman melalui jasa ekspedisi terbaik kerumah anda', color: 'red', icon: require('../../../assets/details/no.png')},
            {time: '', title: 'Selesai', description: 'Pesanan telah sampai, kami menanti pesanan anda selanjutnya.' , color: 'red', icon: require('../../../assets/details/no.png')},
        ]
    }
    selectPhoto() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.error('ImagePicker Error: ', response.error);
            } else {
                let source = {
                    uri: response.uri
                }
                this.setState({
                    imageSource: source
                })
            }
        })
    }
    render() {
        return(
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
                            <Title>No. XXXXXXX</Title>
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
                    <Card>
                        <Text style={styles.trackHeader}>Track Pesanan</Text>
                        <Timeline
                            innerCircle={'icon'}
                            circleSize={25}
                            circleColor='#B2BEC3'
                            lineColor='#B2BEC3'
                            detailContainerStyle={{marginBottom: 20, marginRight: 10, paddingLeft: 5, paddingRight: 5, backgroundColor: '#FFFFFF', borderRadius: 10}}
                            descriptionStyle={{paddingLeft: 8, color:'#B2BEC3', alignContent: 'space-around'}}
                            options={{
                            style:{paddingTop:5},
                            marginLeft: -37,
                            }} 
                            data={this.data}
                        />
                    </Card>
                    <Card>
                        <Text style={styles.trackHeader}>Unggah Bukti Bayar</Text>
                        <TouchableOpacity onPress={this.selectPhoto.bind(this)}>
                            {this.state.imageSource !== null ?
                                <Image
                                    square
                                    style={{
                                        height: 200,
                                        width: 200,
                                        alignSelf: "center",
                                        top: 20,
                                    }}
                                    source={this.state.imageSource} />
                                :
                                <Icon name='camera' style={styles.uploadIcon} />}
                        </TouchableOpacity>
                        <View tyle={styles.confirmButtonSection}>
                            <Button style={styles.confirmButton}>
                                <Text style={{ color: 'white'}}>CHECKOUT</Text> 
                            </Button>
                        </View>
                    </Card>
                </Content>
            </Container>
        );

    }
    
}

export default DetailTransaksi;