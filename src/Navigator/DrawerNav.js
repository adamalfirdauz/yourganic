import { DrawerNavigator } from 'react-navigation'
import Register from '../Register';
import SideMenus from '../SideMenus'
import HomeScreen from '../HomeScreen/HomeScreen.js'
import Profile from '../Profile/Profile.js'
import SideBar from '../SideBar/SideBar'

import DetailStackNav from './DetailStackNav'
import StackNav from './StackNav'

const DrawerNav = DrawerNavigator({
    Home : {screen: HomeScreen},
    Profile:{ screen: Profile },
    // LogOut: { screen: DetailStackNav },
    Register: { screen: Register },
  },
    {headerMode : "none",
    contentComponent : SideBar
}
  );
  export default DrawerNav; 