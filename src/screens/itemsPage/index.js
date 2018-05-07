import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Platform, FlatList } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import ItemCard from '../../theme/components/ItemCard';
import { Container, Header, Left, Right, Button, Icon, Body, Title, Card, ListItem } from 'native-base';
import Styles from './Styles';

var strawberry = require('../../../assets/image/card/fruit/strawberry.jpg');

class ItemsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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
                        <Right>
                            <Button transparent>
                                <Icon name="search" />
                            </Button>
                        </Right>
                    </Header>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    data={[
                        {
                            title: "Strawberry",
                            price: "10.000",
                            unit: "250 gr",
                            key: 'strawberry',
                            image: require('../../../assets/image/card/fruit/strawberry.jpg'),
                        }, {
                            title: "Banana",
                            price: "15.000",
                            unit: "500 gr",
                            key: 'banana',
                            image: require('../../../assets/image/card/fruit/banana.jpg'),
                        }, {
                            title: "Strawberry",
                            price: "10.000",
                            unit: "250 gr",
                            key: 'strawberry',
                            image: require('../../../assets/image/card/fruit/strawberry.jpg'),
                        }, {
                            title: "Banana Panjang Gimana dong",
                            price: "15.000",
                            unit: "500 gr",
                            key: 'banana',
                            image: require('../../../assets/image/card/fruit/banana.jpg'),
                        }, {
                            title: "Strawberry",
                            price: "10.000",
                            unit: "250 gr",
                            key: 'strawberry',
                            image: require('../../../assets/image/card/fruit/strawberry.jpg'),
                        }, {
                            title: "Banana",
                            price: "15.000",
                            unit: "500 gr",
                            key: 'banana',
                            image: require('../../../assets/image/card/fruit/banana.jpg'),
                        },
                    ]}
                    renderItem={({ item }) => (
                        <ItemCard data={item} navigation={this.props.navigation}/>
                    )}
                />
            </Container>
        );
    }
}

export default ItemsPage;