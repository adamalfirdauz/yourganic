import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Card } from 'native-base';
import Styles from './Styles';

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: this.props.data,
         };
    }
    pushNavigate(page, data) {
        this.props.navigation.push(
            page,
            {
                data: data
            }
        );
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.pushNavigate('ItemDetail', this.state.data)}>
                <Card style={Styles.card}>
                    <Image source={this.state.data.image} style={Styles.image} />
                    <Text numberOfLines={1} style={Styles.title}>{this.state.data.title}</Text>
                    <Text style={Styles.price}>{this.state.data.price}</Text>
                </Card>
            </TouchableOpacity>
        );
    }
}

export default ItemCard;