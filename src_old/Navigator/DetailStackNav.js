import { StackNavigator } from 'react-navigation';
import DetailBarang from '../DetailBarang/DetailBarang'

import DrawerNav from './DrawerNav'

const DetailStackNav = StackNavigator({
    Detail : {screen: DetailBarang},
  },
    {headerMode : "none"}
  );
  export default DetailStackNav; 