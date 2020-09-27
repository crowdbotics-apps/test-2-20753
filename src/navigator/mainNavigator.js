import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard16113032Navigator from '../features/Dashboard16113032/navigator';
import SignUp27113029Navigator from '../features/SignUp27113029/navigator';
import UserProfile8113028Navigator from '../features/UserProfile8113028/navigator';
import Maps112914Navigator from '../features/Maps112914/navigator';
import Add-Item112913Navigator from '../features/Add-Item112913/navigator';
import Maps112909Navigator from '../features/Maps112909/navigator';
import UserProfile112905Navigator from '../features/UserProfile112905/navigator';
import UserProfile112873Navigator from '../features/UserProfile112873/navigator';
import Tutorial112872Navigator from '../features/Tutorial112872/navigator';
import NotificationList112844Navigator from '../features/NotificationList112844/navigator';
import Settings112843Navigator from '../features/Settings112843/navigator';
import Settings112835Navigator from '../features/Settings112835/navigator';
import UserProfile112833Navigator from '../features/UserProfile112833/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard16113032: { screen: Dashboard16113032Navigator },
SignUp27113029: { screen: SignUp27113029Navigator },
UserProfile8113028: { screen: UserProfile8113028Navigator },
Maps112914: { screen: Maps112914Navigator },
Add-Item112913: { screen: Add-Item112913Navigator },
Maps112909: { screen: Maps112909Navigator },
UserProfile112905: { screen: UserProfile112905Navigator },
UserProfile112873: { screen: UserProfile112873Navigator },
Tutorial112872: { screen: Tutorial112872Navigator },
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
