import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Card } from 'native-base';
import Styles from './Styles';

var category = require('../../../assets/details/veg.png')

class ItemBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <View style={Styles.mainBack}>
            <Image source={category} style={styles.icons} />
            <Text style={styles.name}>Sayur</Text>
        </View>
        );
    }
}