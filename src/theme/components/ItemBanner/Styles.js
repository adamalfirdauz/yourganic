import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    cardBody:{
        margin: 0,
        height :150,
        padding: 5,
        borderWidth: 0,
        borderColor: 'white',
    },
    cardImage:{
        padding: 0,
        paddingTop: 0,
        margin: 0,
        height: 150,
        alignSelf: 'center',
        resizeMode: 'contain',
    }
});

export default Styles;