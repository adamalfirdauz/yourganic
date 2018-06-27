import React, { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { Card, View } from 'native-base';
import Styles from './Styles';
import { FlatList } from 'react-native-gesture-handler';

class ItemBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <FlatList
                data = {this.props.data.data}
                extraData = {this.props.data.meta}
                renderItem={(item)=>(
                <TouchableOpacity onPress={()=> this.props.navigation.push("DetailTransaksi", item.item)}>
                    <Card style={Styles.cardBody}>
                        <Image style={Styles.cardImage} source={this.props.data[0]}/>
                        <View style={Styles.cardName}>
                            <Text style={Styles.cardNameTop}>30 Maret 2018</Text>
                            <Text style={Styles.cardNameBottom}>No. {item.item.code}</Text>
                        </View >
                        <View style={Styles.cardTrack}>
                            <Text style={Styles.cardTrackTop}>Pembayaran</Text>
                            <Text style={Styles.cardTrackBottom}>Rp. {item.item.total}</Text>
                        </View>
                    </Card>
                </TouchableOpacity>
                )}

            keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

export default ItemBanner;