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
    IconDetailFlex: {
        // padding : 8,
        padding: 5,
        paddingLeft: 15,
        paddingBottom: 12,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        padding: 10,
        paddingBottom: 0,
        fontSize: 20,
        color: '#47525E',
        fontWeight: "bold",
    },
    category:{
      color: '#B2BEC3',
      fontSize: 16,
      paddingRight: 10,
    },
    icons: {
        paddingRight: 5,
        color: '#B2BEC3',
        fontSize: 20,
        // resizeMode: 'contain',
        // padding: 10,
    },
    images: {
        height: 200,
        width : 200, 
        alignSelf: 'center',
        resizeMode: 'contain',
        backgroundColor: 'white',
        marginBottom: 10,
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
    hairStyles: {
        backgroundColor: '#bababa',
        height: 0.5,
        width: 400,
        marginTop: 10,
        margin: 0,
        marginBottom: 10
    },
    footer: {
        
    },
    tambahButton: {
        height : 60,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#007300',
        justifyContent: 'center',
    },
    ButtonWord: {
        fontSize: 17,
        fontWeight: 'bold'
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
    minuss: {
        paddingLeft: 10,
        paddingTop: 15
    }
});

export default styles;