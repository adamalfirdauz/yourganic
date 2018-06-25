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
    item: {
        padding: 10,
        paddingBottom: 5,
        fontSize: 20,
        color: '#47525E',
        fontWeight: "bold",
    },
    icons: {
        height: 25,
        // position: 'relative',
        resizeMode: 'contain',
        padding: 10,
    },
    images: {
        height: 200,
        alignSelf: 'center',
        resizeMode: 'contain',
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
    minuss: {
        paddingLeft: 10,
        paddingTop: 15
    }
});

export default styles;