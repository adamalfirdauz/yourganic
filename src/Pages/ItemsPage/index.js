import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import ItemCard from '../../Components/ItemCard';
import Styles from './Styles';
import { Container, Header, Left, Right, Button, Icon, Body, Title, Card, ListItem } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

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
                <StatusBar
                    backgroundColor="#004600"
                    barStyle="light-content"
                />
                <View>
                    <Header style={Styles.header} androidStatusBarColor='#004600' noShadow searchBar>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="arrow-back" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Home</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name="search" />
                            </Button>
                        </Right>
                    </Header>
                </View>
                {/* <View> */}
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
                {/* </View> */}
                {/* <View>
                    <Text style={{ alignSelf: 'center', margin: 'auto', paddingVertical: 20 }}>
                        ~ Tidak ada data untuk ditampilkan ~
                    </Text>
                </View> */}
            </Container>
        );
    }
}

export default ItemsPage;