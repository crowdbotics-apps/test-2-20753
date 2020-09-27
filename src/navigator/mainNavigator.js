import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList112844Navigator from '../features/NotificationList112844/navigator';
import Settings112843Navigator from '../features/Settings112843/navigator';
import Settings112835Navigator from '../features/Settings112835/navigator';
import UserProfile112833Navigator from '../features/UserProfile112833/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList112844: { screen: NotificationList112844Navigator },
Settings112843: { screen: Settings112843Navigator },
Settings112835: { screen: Settings112835Navigator },
UserProfile112833: { screen: UserProfile112833Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
