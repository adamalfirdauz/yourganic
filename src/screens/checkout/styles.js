import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#007300',
        padding: Platform.OS === "android" ? 20 : 0,
        paddingTop: 18,
    },
    headerStyle: {
        backgroundColor: 'transparent',
        padding: Platform.OS === "android" ? 20 : 0,
        paddingTop: 18,
        zIndex: 1,
        position: 'absolute'
    },
    content: {
        // flex: 10
    },
    images: {
        height: 200,
        alignSelf: 'center',
        resizeMode: 'contain',
        // position : 'absolute',
    },
    disc: {
        color: 'white',
        padding: 5,
        paddingLeft: 12,
        paddingBottom: 2,
        fontSize: 12
    },
    card: {
        height: 28,
        width: 80,
        borderRadius: 8,
        backgroundColor: '#e54d20'
    },
    harga: {
        paddingLeft: 5,
        paddingTop: 2,
        color: '#e54d20',
        fontSize: 20
    },
    item: {
        paddingLeft: 5,
        fontSize: 25,
        color: '#211e1e'
    },
    hairStyles: {
        backgroundColor: '#bababa',
        height: 0.5,
        width: 400,
        marginTop: 10,
        margin: 0,
        marginBottom: 10
    },
    footer: {
        backgroundColor: 'white'
    },
    tambah: {
        marginRight: 5,
        width: 180
    },
    jumlah: {
        paddingLeft: 30,
        color: '#6d6a6a',
        fontSize: 20,
        fontWeight: 'bold',
    },
    troli: {
        // position : 'absolute',
        paddingLeft: 25,
        // paddingTop: 30
    },
    bodi: {
        position: 'absolute',
        paddingLeft: 0,
        marginLeft: 0
    },
    shoppingBag :{
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: 40,
        fontSize : 20,
        fontWeight :'bold'
    },
    reviews:{
        alignSelf: 'center',
    },
    itemCardImage :{
        height : 60,
        width :60
    },
    itemCardTitle : {
        fontSize: 18,
        fontWeight : 'bold', 
    },
    itemCardPrice :{
        color : '#26ef62',
        fontSize : 16
    },
    closeIcon :{
        paddingLeft : 20
    },
    hairStyles: {
        backgroundColor: '#A2A2A2',
        height: 1,
        width: 360,
        marginTop: 10,
        margin: 20,
        marginBottom: 10
    },
    shipping :{
        marginLeft : 20,
        color : '#636568'
    },
    priceShipping : {
        paddingLeft: 200,
        color : '#636568'
    },
    priceTotal :{
        paddingLeft: 228,
    }

});

export default styles;