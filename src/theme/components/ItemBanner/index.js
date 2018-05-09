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
            <Card style={Styles.cardBody}>
                <Image style={Styles.cardImage}
                    source={this.props.data[0]}
                />
            </Card>
        );
    }
}

export default ItemBanner;