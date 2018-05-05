import { StackNavigator } from 'react-navigation';
import SignIn from '../SignIn';
import Register from '../Register';
import LogoTitle from '../LogoTitle';
import Mains from '../Mains';
import SideMenus from '../SideMenus'
import HomeScreen from '../HomeScreen/HomeScreen.js'

import DrawerNav from './DrawerNav'

const LoginStackNav = StackNavigator({
    Home : {screen: DrawerNav},
    Main:{ screen: Mains },
    SignIn: { screen: SignIn },
    Register: { screen: Register },
  },
    {headerMode : "none"}
  );
  export default LoginStackNav; 