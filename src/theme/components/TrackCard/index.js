import React, { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { Card, View } from 'native-base';
import Styles from './Styles';
import { FlatList } from 'react-native-gesture-handler';

class ItemBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <FlatList
                data={this.props.data.data}
                extraData={this.props.data.meta}
                renderItem={(item) => (
                    <TouchableOpacity onPress={() => this.props.navigation.push("DetailTransaksi", item.item)}>
                        <Card style={Styles.cardBody}>
                            <Image style={Styles.cardImage} source={this.props.data[0]} />
                            <View style={Styles.cardName}>
                                <Text numberOfLines={1} style={Styles.cardNameTop}>{item.item.created_at.date}</Text>
                                <Text style={Styles.cardNameBottom}>No. {item.item.code}</Text>
                            </View >
                            <View style={Styles.cardTrack}>
                                {item.item.status == 1 ? <Text style={Styles.cardTrackTop}>Check-Out</Text> :
                                    item.item.status == 2 ? <Text style={Styles.cardTrackTop}>Dibayar</Text> :
                                        item.item.status == 3 ? <Text style={Styles.cardTrackTop}>Pending</Text> :
                                            item.item.status == 4 ? <Text style={Styles.cardTrackTop}>Pengiriman</Text> :
                                                <Text style={Styles.cardTrackTop}>Selesai</Text>}
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