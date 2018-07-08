import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Platform, FlatList } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import ItemCard from '../../theme/components/ItemCard';
import { Container, Header, Left, Right, Button, Icon, Body, Title, Card, ListItem, Item } from 'native-base';
import Styles from './Styles';

var strawberry = require('../../../assets/image/card/fruit/strawberry.jpg');

class ItemsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        // console.error(this.props.navigation.state.params)
    }
    render() {
        return (
            <Container style={Styles.container}>
                <View>
                    <Header style={Styles.header} noShadow>
                        <StatusBar
                            backgroundColor="#004600"
                            barStyle="light-content"
                        />
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.pop()}>
                                <Icon name="arrow-back" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>{this.props.navigation.state.params.data.title}</Title>
                        </Body>
                    </Header>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    data={this.props.navigation.state.params.data.data}
                    renderItem={({ item }) => (
                        <ItemCard data={item} navigation={this.props.navigation} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Container>
        );
    }
}

export default ItemsPage;