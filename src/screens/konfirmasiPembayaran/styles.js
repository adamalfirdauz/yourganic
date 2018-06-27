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
    Images:{
        height: 20,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    bayarDesc: {
        textAlign: 'center',
        fontSize: 15,
        margin: 10,
        color: 'grey',
    },
    bayarNum: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        marginTop: 0,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
    },
    uploadButton: {
        marginTop: 20,
        borderRadius:80,
        borderColor:'white',
        borderWidth:2, 
        backgroundColor: '#007300'
    },
    confirmButton: {
        height : 60,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#007300',
        justifyContent: 'center',
    },
    ButtonWord: {
        fontSize: 17,
        fontWeight: 'bold'
    },
});

export default styles;