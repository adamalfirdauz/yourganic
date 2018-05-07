import { StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#007300',
    padding: Platform.OS === "android" ? 20 : 0,
    paddingTop: 18,
  },
  content: {
    // flex: 10
  },
  FlatList: {
    // flex: 5,
    backgroundColor: '#007300',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 25,
    color: 'white',
    // alignItems: 'center',
    alignSelf: 'center'
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: 'white'
  },
  carding: {
    margin: 0,
    padding: 5,
    borderWidth: 0,
    borderColor: 'white',
  },
  cardImage: {
    resizeMode: 'cover',
    height: 130,
    padding: 0,
    margin: 0,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cardTitleStyle: {
    paddingHorizontal: 5,
    color: '#007300',
    fontWeight: '100',
    fontSize: 14.5
  },
  cardPriceStyle: {
    paddingHorizontal: 5,
    color: '#47a337',
    fontWeight: '100',
    fontSize: 13.5
  },
  labelStyle: {
    color: 'white',
  },
  inputTextStyle: {
    color: 'white'
  },
  item: {
    paddingHorizontal: 32,
    marginHorizontal: 4,
    fontSize: 16,
    height: 32,
    color: 'white',
    fontWeight: 'bold'
  },
});

export default styles;