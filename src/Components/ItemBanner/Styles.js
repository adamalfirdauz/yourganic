import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    cardBody:{
        margin: 0,
        padding: 5,
        borderWidth: 0,
        borderColor: 'white',
    },
    cardImage:{
        resizeMode: 'cover',
        height: 130,
        padding: 0,
        margin: 0,
        resizeMode: 'contain',
        alignSelf: 'center',
    }
});

export default Styles;