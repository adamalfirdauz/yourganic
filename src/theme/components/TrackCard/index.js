import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Card, View } from 'native-base';
import Styles from './Styles';

class ItemBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Card style={Styles.cardBody}>
                <Image style={Styles.cardImage} source={this.props.data[0]}/>
                <View style={Styles.cardName}>
                    <Text style={Styles.cardNameTop}>30 Maret 2018</Text>
                    <Text style={Styles.cardNameBottom}>No. XXXXXXX</Text>
                </View >
                <View style={Styles.cardTrack}>
                    <Text style={Styles.cardTrackTop}>Pembayaran</Text>
                    <Text style={Styles.cardTrackBottom}>Rp. 50.000</Text>
                </View>
            </Card>
        );
    }
}

export default ItemBanner;