import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#007300',
        height: 50,
        paddingTop: Platform.OS === "android" ? 2 : 0,
        // paddingTop: 18,
        // marginTop: Platform.OS === "android" ? 18 : 0,
        // backgroundColor: 'gray',
    },
    carding: {
        margin: 20,
        marginLeft: 10,
        width: 360
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TrackCard: {
        margin: 7,
    }

});

export default styles;