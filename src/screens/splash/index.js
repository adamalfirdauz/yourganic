import React, { Component } from 'react'
import { View, Image, StatusBar, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

var logo = require('../../../assets/image/Logo.png');

const resetActionPrelogin = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Prelogin'})
    ],
});
const resetActionHome = NavigationActions.reset({
    index: 0,
    actions: [
        // NavigationActions.navigate({routeName: 'Drawer'}),
        NavigationActions.navigate({routeName: 'Drawer'})
    ],
});

class Splash extends Component {
    constructor(props) {
        super(props);
        this.fetchProfile();
        this.state = {  };
    }
    async fetchProfile() {
        try {
            const value = await AsyncStorage.getItem('user-profile')
            let parsed = JSON.parse(value)
            if (value != null) {
                this.props.navigation.dispatch(resetActionHome);
            }
            else{
                this.props.navigation.dispatch(resetActionPrelogin);
            }
        } catch (error) {
            console.error("error")
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#004600" barStyle="light-content"/>
                <Image source={logo} style={styles.logo} />
            </View>
        );
    }
}

export default Splash;