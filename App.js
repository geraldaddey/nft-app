import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  NavigatorIOS,
} from "react-native";
import Home from "./screens/Home";
import Details from "./screens/Details";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const App = () => {
  const [loaded] = useFonts({
    Outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    OutfitSemiBold: require("./assets/fonts/Outfit-Bold.ttf"),
    OutfitLight: require("./assets/fonts/Outfit-SemiBold.ttf"),
    OutfitBold: require("./assets/fonts/Outfit-Light.ttf"),
  });

  const Stack = createStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  const { header, button, container } = styles; //destructure styles

  if (!loaded) return null;
  else
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: true }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "red",
    borderColor: "white",
    width: "80%",
    margin: "auto",
    borderRadius: "10%",
    padding: "2rem",
  },

  button: {
    marginTop: "2rem",
  },
});

export default App;
