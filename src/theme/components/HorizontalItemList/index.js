import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity, Image, View } from 'react-native';
import { Card, Button, Icon } from 'native-base';
import Styles from './Styles';
import { DrawerNavigator } from "react-navigation";

class HorizontalItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    pushNavigate(page, data){
        this.props.navigation.push(page,{data: data});
    }

    render() {
        return (
            <Card>
                <View style={{flexDirection:'row'}}>
                    <Text style={Styles.cardTitle}>{this.props.title}</Text>
                    <TouchableOpacity style={{marginLeft:'auto'}} 
                        onPress={() => this.pushNavigate("ItemsPage",{title: this.props.title})}
                        // onPress={() => this.props.navigation.navigate('ItemsPage') }
                        >
                        <Text style={Styles.cardTitleRight}>
                            Lihat Lainnya
                            <Icon style={{fontSize: 14, color:'#004600'}} name='arrow-round-forward'/>
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={[
                        {
                            title: "Strawberry",
                            price: "10.000",
                            unit: "250 gr",
                            key : 'strawberry',
                            image: require('../../../../assets/image/card/fruit/strawberry.jpg'),
                        }, {
                            title: "Banana",
                            price: "15.000",
                            unit: "500 gr",
                            key : 'banana',
                            image: require('../../../../assets/image/card/fruit/banana.jpg'),
                        }, {
                            title: "Strawberry",
                            price: "10.000",
                            unit: "250 gr",
                            key : 'strawberry',
                            image: require('../../../../assets/image/card/fruit/strawberry.jpg'),
                        }, {
                            title: "Banana Panjang Gimana dong",
                            price: "15.000",
                            unit: "500 gr",
                            key : 'banana',
                            image: require('../../../../assets/image/card/fruit/banana.jpg'),
                        }, {
                            title: "Strawberry",
                            price: "10.000",
                            unit: "250 gr",
                            key : 'strawberry',
                            image: require('../../../../assets/image/card/fruit/strawberry.jpg'),
                        }, {
                            title: "Banana",
                            price: "15.000",
                            unit: "500 gr",
                            key : 'banana',
                            image: require('../../../../assets/image/card/fruit/banana.jpg'),
                        },
                    ]}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.pushNavigate('ItemDetail', item)} style={{paddingHorizontal:2.5}}>
                            <Card noShadow style={Styles.itemCard}>
                                <Image style={Styles.itemCardImage}
                                    source={item.image}
                                />
                                <Text numberOfLines={1} style={Styles.itemCardTitle}>{item.title}</Text>
                                <Text style={Styles.itemCardPrice}>Rp {item.price}/{item.unit}</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </Card>
        );
    }
}

export default HorizontalItemList;