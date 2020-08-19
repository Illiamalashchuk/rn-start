import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/home.screen.js";
import FriendsScreen from "./src/screens/friends.screen.js";
import ImagesScreen from "./src/screens/images.screen.js";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Friends: FriendsScreen,
    Images: ImagesScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home",
    },
  }
);

export default createAppContainer(navigator);
