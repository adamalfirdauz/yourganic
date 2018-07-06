import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007300',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: '#004600'
    },
    buttonTextStyle: {
        color: 'white'
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 50,
        width: '100%'
        
    }
});

export default styles;