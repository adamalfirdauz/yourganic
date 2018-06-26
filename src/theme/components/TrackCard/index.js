import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Card } from 'native-base';
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
                <Text style={Styles.cardName}>Pisang Arum Manis</Text>
                <Text style={Styles.cardTrack}>Pembayaran</Text>
            </Card>
        );
    }
}

export default ItemBanner;