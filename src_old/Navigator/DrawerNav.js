import { AppRegistry } from 'react-native'; 
import { DrawerNavigator } from 'react-navigation'
import Register from '../Register';
import SideMenus from '../SideMenus'
import HomeScreen from '../HomeScreen/HomeScreen.js'
import Profile from '../Profile/Profile.js'
import SideBar from '../SideBar/SideBar'
import ItemsPage from '../Pages/ItemsPage';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
import DetailStackNav from './DetailStackNav'
import DetailBarang from '../DetailBarang/DetailBarang'

import ProfileStackNav from './ProfileStackNav'
import StackNav from './StackNav'

const DrawerNav = DrawerNavigator({
    Home : {screen: HomeScreen},
    Profile:{ screen: Profile },
    Register: { screen: Register },
    ItemsPage: { screen: ItemsPage},
    editProfile : {screen: UpdateProfile},
    Detail : {screen : DetailBarang}
  },
    {headerMode : "none",
    contentComponent : SideBar
}
  );
  export default DrawerNav; 
