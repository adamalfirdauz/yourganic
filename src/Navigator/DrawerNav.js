import { DrawerNavigator } from 'react-navigation'
import SignIn from '../SignIn';
import Register from '../Register';
import LogoTitle from '../LogoTitle';
import Mains from '../Mains';
import SideMenus from '../SideMenus'
import HomeScreen from '../HomeScreen/HomeScreen.js'
import SideBar from '../SideBar/SideBar'

const DrawerNav = DrawerNavigator({
    Home : {screen: HomeScreen},
    Main:{ screen: Mains },
    SignIn: { screen: SignIn },
    Register: { screen: Register },
  },
    {headerMode : "none",
    contentComponent : SideBar
}
  );
  export default DrawerNav; 