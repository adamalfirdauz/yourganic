import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

const Styles = StyleSheet.create({
    container: { 
        flex: 1, backgroundColor: '#f6f6f6' 
    },
    header: {
        backgroundColor: '#007300',
        padding: Platform.OS === "android" ? 20 : 0,
        paddingTop: 18,
    },

});

export default Styles;