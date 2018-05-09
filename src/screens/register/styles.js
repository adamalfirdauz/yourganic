import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007300',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleStyle: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        margin: 20,
        paddingTop: 70,
    },
    buttonStyle: {
        marginVertical: 20,
        borderRadius: 20,
        backgroundColor: '#004600'
    },
    buttonTextStyle: {
        color: 'white'
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    labelStyle: {
        color: 'white',
    },
    inputTextStyle: {
        color: 'white',
    },
    title: {
        color: 'white'
    },
    input: {
        color: 'white',
    },
    loading: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop: 100
    }
});

export default styles;