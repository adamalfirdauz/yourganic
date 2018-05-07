import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    card: {
        margin: 0,
        padding: 0,
        width: 172.5,
        height: 225,
        borderWidth: 0,
        borderColor: 'white',
    },
    image: {
        height: 172.5,
        width: 172.5,
        padding: 0,
        margin: 0,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        paddingHorizontal: 5,
        color: '#007300',
        fontWeight: '100',
        fontSize: 14.5
    },
    price: {
        paddingHorizontal: 5,
        color: '#47a337',
        fontWeight: '100',
        fontSize: 13.5
    }
});

export default Styles;