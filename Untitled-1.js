import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginScreen from '../Containers/LoginScreen';
import SignupScreen from '../Containers/SignupScreen';
import HomeScreen from '../Containers/HomeScreen';
import DrawerButton from '../Components/DrawerButton';

const HomeNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen,
  },
  Home: {
    screen: HomeScreen,
  },
}, {
  navigationOptions: {
    header: navigation => ({
      title: 'My App',
      left: <DrawerButton navigation={navigation} />,
    }),
  },
});


const MainNavigator = DrawerNavigator({
  Home: {
    screen: HomeNavigator,
  },
});

export default MainNavigator;