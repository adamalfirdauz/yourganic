import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Card } from "native-base";
import Styles from './Styles';

class HorizontalItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    redirect(page, data){
        this.props.nav.navigation.navigate(page, data)
      }

    render() {
        return (
            <Card>
                <Text style={Styles.cardTitle}>{this.props.title}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={[
                        {
                            title: "Strawberry",
                            price: "10.000",
                            unit: "250 gr",
                            key : 'strawberry',
                            image: require('../../../assets/image/card/fruit/strawberry.jpg'),
                        }, {
                            title: "Banana",
                            price: "15.000",
                            unit: "500 gr",
                            key : 'banana',
                            image: require('../../../assets/image/card/fruit/banana.jpg'),
                        }, {
                            title: "Strawberry",
                            price: "10.000",
                            unit: "250 gr",
                            key : 'strawberry',
                            image: require('../../../assets/image/card/fruit/strawberry.jpg'),
                        }, {
                            title: "Banana Panjang Gimana dong",
                            price: "15.000",
                            unit: "500 gr",
                            key : 'banana',
                            image: require('../../../assets/image/card/fruit/banana.jpg'),
                        }, {
                            title: "Strawberry",
                            price: "10.000",
                            unit: "250 gr",
                            key : 'strawberry',
                            image: require('../../../assets/image/card/fruit/strawberry.jpg'),
                        }, {
                            title: "Banana",
                            price: "15.000",
                            unit: "500 gr",
                            key : 'banana',
                            image: require('../../../assets/image/card/fruit/banana.jpg'),
                        },
                    ]}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.redirect('Detail', item)}>
                            <Card noShadow style={Styles.itemCard}>
                                <Image style={Styles.itemCardImage}
                                    source={item.image}
                                />
                                <Text style={Styles.itemCardTitle}>{item.title}</Text>
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