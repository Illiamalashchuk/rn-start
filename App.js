import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from './src/context/blog.context'
import IndexScreen from "./src/screens/index.screen.js";
import ShowScreen from "./src/screens/show.screen.js";
import CreateScreen from "./src/screens/create.screen.js";
import EditScreen from "./src/screens/edit.screen.js";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
