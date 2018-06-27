import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity, Image, View, ActivityIndicator } from 'react-native';
import { Card, Button, Icon } from 'native-base';
import Styles from './Styles';
import { DrawerNavigator } from "react-navigation";

var axios = require('../../../api/axios.js');

class HorizontalItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            barang : [],
            image : 'http://yourganic.codepanda.web.id/'
          }
          this.fetchStuff()
    }
      

    pushNavigate(page, data){
        this.props.navigation.push(page,{data: data});
    }

    fetchStuff(){
        // this.setState({ loading: true })
        axios.get('/api/product/getAll',{
            headers: {
                Accept: 'application/json',
                // 'Authorization' : 'Bearer ' + this.state.token
            },
        }).then(response => {
            if(response.data){
                this.setState({barang : response.data.data})
                // console.error(this.state.barang)
                // console.error(this.state.barang)
                }
            else{
                alert("Login gagal, periksa email dan password anda")
                // this.setState({ loading: false })
            }
        }).catch( error => {
            alert("Login Gagal, periksa email dan password anda")
            // this.setState({loading: false})
            console.error(error)    
            
        });
    }

    loader(){
        return this.state.loading
    }

    render() {
        return (
            <Card>
                <View style={{flexDirection:'row'}}>
                    <Text style={Styles.cardTitle}>{this.props.title}</Text>
                    <TouchableOpacity style={{marginLeft:'auto'}} 
                        onPress={() => this.pushNavigate("ItemsPage",{title: this.props.title})}
                        // onPress={() => this.props.navigation.navigate('ItemsPage') }
                        >
                        <Text style={Styles.cardTitleRight}>
                            Lihat Lainnya
                            <Icon style={{fontSize: 14, color:'#004600'}} name='arrow-round-forward'/>
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={this.state.barang}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.pushNavigate('ItemDetail', item)} style={{paddingHorizontal:2.5}}>
                            <Card noShadow style={Styles.itemCard}>
                                <Image style={Styles.itemCardImage}
                                    source={{ uri : this.state.image + item.img}}
                                />
                                <Text numberOfLines={1} style={Styles.itemCardTitle}>{item.name}</Text>
                                <Text style={Styles.itemCardPrice}>Rp {item.price}/{item.unit}</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                      keyExtractor={(item, index) => index.toString()}
                />
            </Card>
        );
    }
}

export default HorizontalItemList;