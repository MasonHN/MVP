/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from "react";
import {
  createDrawerNavigator,
  SafeAreaView,
  DrawerItems,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Image, View, Text } from "react-native";
import ActivitiesScreen from "./components/ActivitiesScreen";
import ProfileScreen from "./components/ProfileScreen";
import MoodsScreen from "./components/MoodsScreen";
import ComparisonsScreen from "./components/ComparisonsScreen";

const DrawerContent = props => {
  return (
    <SafeAreaView
      forceInset={{
        top: "always",
        horizontal: "never",
        drawerBackgroundColor: "transparent "
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingBottom: 10,
          paddingLeft: 15,
          paddingTop: 10
        }}
      >
        <View style={{ flex: 80 }}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={require("./20190411_124846.jpg")}
          />
          <Text style={{ paddingTop: 10, fontSize: 14, fontWeight: "900" }}>
            Hunter Mason
          </Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  );
};

const ComparisonsNavigator = createDrawerNavigator(
  {
    Comparisons: { screen: ComparisonsScreen }
  },
  {
    drawerPosition: "right"
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Profile: { screen: ProfileScreen },
    Activities: { screen: ActivitiesScreen },
    Moods: { screen: MoodsScreen },
    Comparisons: { screen: ComparisonsNavigator }
  },
  {
    contentComponent: DrawerContent,
    drawerBackgroundColor: "whitesmoke"
  }
);

const App = createAppContainer(MainNavigator);
export default App;
