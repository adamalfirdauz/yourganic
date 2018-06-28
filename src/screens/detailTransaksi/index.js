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
import RNFetchBlob from 'rn-fetch-blob'
import Provider from '../../provider/setup.js'

var axios = require('../../api/axios.js');

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
        provider = new Provider()
        this.getToken()
        this.state = {
            id_transaction: '',
            imageSource: null,
            loading: false,
            gambar : false,
            img : null,
            status : this.props.navigation.state.params.status
        }
        this.data = [
            {time: '', title: 'Check-out', description: 'Bayar produk segar anda segera.', color: 'green', icon: this.state.status>=1 ? require('../../../assets/details/yes.png') : require('../../../assets/details/no.png' )},
            {time: '', title: 'Dibayar', description: 'Pesanan telah dibayar, kami akan segera mengirim produk segar kerumah anda', color: 'green', icon: this.state.status>=2 ? require('../../../assets/details/yes.png') : require('../../../assets/details/no.png' )},
            {time: '', title: 'Pending', description: 'Pembayaran sedang dikonfirmasi oleh sistem', color: 'green', icon: this.state.status>=3 ? require('../../../assets/details/yes.png') : require('../../../assets/details/no.png' )},
            {time: '', title: 'Pengiriman', description: 'Pesanan dalam proses pengiriman melalui jasa ekspedisi terbaik kerumah anda', color: 'red', icon: this.state.status>=4 ? require('../../../assets/details/yes.png') : require('../../../assets/details/no.png' )},
            {time: '', title: 'Selesai', description: 'Pesanan telah sampai, kami menanti pesanan anda selanjutnya.' , color: 'red', icon: this.state.status>=5 ? require('../../../assets/details/yes.png') : require('../../../assets/details/no.png' )},
        ]
        // console.error(this.props.navigation.state.params)
        this.fetchStuff()
    }

    panggilData(){
        this.data = [
            {time: '', title: 'Check-out', description: 'Bayar produk segar anda segera.', color: 'green', icon: this.state.status>=1 ? require('../../../assets/details/yes.png') : require('../../../assets/details/no.png' )},
            {time: '', title: 'Dibayar', description: 'Pesanan telah dibayar, kami akan segera mengirim produk segar kerumah anda', color: 'green', icon: this.state.status>=2 ? require('../../../assets/details/yes.png') : require('../../../assets/details/no.png' )},
            {time: '', title: 'Pending', description: 'Pembayaran sedang dikonfirmasi oleh sistem', color: 'green', icon: this.state.status>=3 ? require('../../../assets/details/yes.png') : require('../../../assets/details/no.png' )},
            {time: '', title: 'Pengiriman', description: 'Pesanan dalam proses pengiriman melalui jasa ekspedisi terbaik kerumah anda', color: 'red', icon: this.state.status>=4 ? require('../../../assets/details/yes.png') : require('../../../assets/details/no.png' )},
            {time: '', title: 'Selesai', description: 'Pesanan telah sampai, kami menanti pesanan anda selanjutnya.' , color: 'red', icon: this.state.status>=5 ? require('../../../assets/details/yes.png') : require('../../../assets/details/no.png' )},
        ]
    }
    selectPhoto() {
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.error('ImagePicker Error: ', response.error);
          }
          else {
            let source = { uri: response.uri }
            this.setState({ imageSource: source , gambar : true })
            // console.error(gambar.uri)
          }
        })
      }

    getToken(){
        provider.getToken().then((value) => {
          //this callback is executed when your Promise is resolved
          let parsed = JSON.parse(value)
          this.setState({
            token : parsed
          })
      }).catch((error) => {
          console.log('Terjadi kesalahan : ' + error);
      });
      // console.error(this.props.navigation.state.params)
    }

    uploadPhoto() {
        if(this.state.gambar){
        this.setState({
          loading: true
        })
        RNFetchBlob.fetch('POST', 'http://yourganic.codepanda.web.id/api/transaction/update', {
            Accept: 'application/json',
            'Authorization' : 'Bearer ' + this.state.token,
            'Content-Type': 'multipart/form-data',
        }, [
            { name: 'payment_proof', filename: 'image.jpg', type: 'image/png', data: RNFetchBlob.wrap(this.state.imageSource.uri) },
            { name: 'id', data : JSON.stringify(this.props.navigation.state.params.id)},
          ]).then((resp) => {
            let dataku = JSON.parse(resp.data)
            console.error(dataku)
            this.setState({
                status : dataku.data.status
            })
            this.panggilData()
            // provider.storeItem('user-profile', dataku.data)
          }).catch((err) => {
            console.error(err)
          })
        }
    }

    // updateTransaction() {
    //     this.setState({ loading: true })
    //     this.uploadPhoto()
    //     axios.post('/api/transaction/update', 
    //     {
    //         id: this.props.navigation.state.params.id,
    //         //status: 'done',
    //     },{
    //         headers: {
    //             Accept: 'application/json',
    //             'Authorization' : 'Bearer ' + this.state.token
    //         },
    //     }).then(response => {
    //         // console.error(this.props.navigation.state.params.id)
    //         if(response.data){
    //             // console.error(response.data)
    //             // this.storeItem('user-profile',response.data.data)
    //             // provider.storeItem('user-profile', response.data.data)
    //             alert("Upload bukti bayar berhasil, silahkan tunggu konfirmasi dari admin")
    //             this.props.navigation.pop()
    //           }
    //         else{
    //             alert("Login gagal, periksa email dan password anda")
    //             this.setState({ loading: false })
    //         }
    //     }).catch( error => {
    //         alert("Login Gagal, periksa email dan password anda")
    //         this.setState({loading: false})
    //         console.error(error)    
            
    //     });
    // }

    fetchStuff(){
        provider.getToken().then((value) => {
            //this callback is executed when your Promise is resolved
            this.setState({loading :true})
            let parsed = JSON.parse(value)
            this.setState({
              token : parsed
            })
            axios.get('/api/transaction/get/'+ this.props.navigation.state.params.code,{
                headers: {
                    Accept: 'application/json',
                    'Authorization' : 'Bearer ' + parsed
                },
            }).then(response => {
                if(response.data){
                    // console.error(response.data.data)
                    // this.setState({barang : response.data.data})
                    // console.error(this.state.barang)
                    // console.error(this.state.barang)
                    // console.error(response.data)
                    this.setState({
                        data : response.data.data,
                        loading: false
                    })
                    }
                else{
                    alert("Koneksi gagal, muat ulang halaman ini")
                    this.setState({ loading: false })

                }
            }).catch( error => {
                alert("Koneksi gagal, muat ulang halaman ini")
                // this.setState({loading: false})
                console.error(error)    
                
            });
        }).catch((error) => {
            console.log('Terjadi kesalahan : ' + error);
            console.error('kososng')
        });
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
                            <Title>No. {this.props.navigation.state.params.code}</Title>
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
                    {this.props.navigation.state.params.status==1 ? 
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
                        <Button style={styles.confirmButton} onPress={() => this.uploadPhoto()}>
                            <Text style={{ color: 'white', textAlign: 'center', width:"100%"}}>Konfirmasi</Text> 
                        </Button>
                    </View>
                </Card>
                    :
                <View /> 
                    }
                </Content>
            </Container>
        );

    }
    
}

export default DetailTransaksi;