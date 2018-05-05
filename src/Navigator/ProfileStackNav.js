import { StackNavigator } from 'react-navigation';
import UpdateProfile from '../UpdateProfile/UpdateProfile';

const ProfileStackNav = StackNavigator({
    editProfile:{ screen: UpdateProfile },
  },
  {headerMode : "none"}
  );
  export default ProfileStackNav; 