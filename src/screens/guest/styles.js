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
    footer: {
        backgroundColor: 'rgba(0, 115, 0, 0.7)',
        height: 50,
        width: '100%'
    }
});

export default styles;