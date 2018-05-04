import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import Styles from './Styles';

var strawberry = require('../../../assets/image/card/fruit/strawberry.jpg');

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Card style={Styles.card}>
                <Image source={this.props.data.image} style={Styles.image}/>
                <Text numberOfLines={1} style={Styles.title}>{this.props.data.title}</Text>
                <Text style={Styles.price}>{this.props.data.price}</Text>
            </Card>
        );
    }
}

export default ItemCard;