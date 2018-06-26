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
        <View style={Styles.mainBack}>
            <Image source={this.props.data[0]} style={styles.icons} />
            <Text style={styles.name}>Sayur</Text>
        </View>
        );
    }
}