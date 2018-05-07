import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Card } from 'native-base';
import Styles from './Styles';

var strawberry = require('../../../assets/image/card/fruit/strawberry.jpg');

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: this.props.data,
         };
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', this.props.data)}>
                <Card style={Styles.card}>
                    <Image source={this.props.data.image} style={Styles.image} />
                    <Text numberOfLines={1} style={Styles.title}>{this.props.data.title}</Text>
                    <Text style={Styles.price}>{this.props.data.price}</Text>
                </Card>
            </TouchableOpacity>
        );
    }
}

export default ItemCard;