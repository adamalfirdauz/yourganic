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
    trackHeader: {
        fontSize: 25,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        textAlign: 'center',
        margin: 12
    },
    uploadIcon:{
        fontSize: 120, 
        alignSelf: 'center', 
        padding: 15, 
        color: 'grey', 
        borderRadius: 25, 
        borderWidth: 4,
        borderColor: 'grey',
        marginBottom: 20,
    },
    confirmButton: {
        width: "100%",
        borderRadius:80, 
        borderColor:'white', 
        borderWidth:2,
        marginBottom: 10, 
        backgroundColor: '#007300',
    },
    confirmButtonSection: {
        width:"100%",
        paddingBottom: 20,
     }

});

export default styles;