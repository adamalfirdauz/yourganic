import { DrawerNavigator } from 'react-navigation'
import Register from '../Register';
import SideMenus from '../SideMenus'
import HomeScreen from '../HomeScreen/HomeScreen.js'
import Profile from '../Profile/Profile.js'
import SideBar from '../SideBar/SideBar'
import UpdateProfile from '../UpdateProfile/UpdateProfile';

import ProfileStackNav from './ProfileStackNav'
import StackNav from './StackNav'

const DrawerNav = DrawerNavigator({
    Home : {screen: HomeScreen},
    Profile:{ screen: Profile },
    Register: { screen: Register },
    editProfile : {screen: UpdateProfile}
  },
    {headerMode : "none",
    contentComponent : SideBar
}
  );
  export default DrawerNav; 