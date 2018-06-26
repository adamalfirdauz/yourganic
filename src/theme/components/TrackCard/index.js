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
                    <Text style={Styles.cardNameTop}>Pisang Arum Manis</Text>
                    <Text style={Styles.cardNameBottom}>No. XXXXXXX</Text>
                </View>
                <Text style={Styles.cardTrack}>Pembayaran</Text>
            </Card>
        );
    }
}

export default ItemBanner;