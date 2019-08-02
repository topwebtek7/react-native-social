import React from "react";
import { View } from "react-native";
import { mapping } from "@eva-design/eva";
import { myTheme } from "./src/custom-theme";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { ApplicationProvider } from "react-native-ui-kitten";
import Feed from "./src/Feed";

const AppContainer = createAppContainer(
  createStackNavigator({
    Feed
  })
);

const App = () => (
  <ApplicationProvider mapping={mapping} theme={myTheme}>
    <AppContainer />
  </ApplicationProvider>
);

export default App;
