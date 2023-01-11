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
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((count) => (count += 1));
    console.log(count);
    console.log("Plus Clicked");
  };
  const handleDecrease = () => {
    setCount((count) => (count -= 1));
    console.log(count);
    console.log(" Minus Clicked");
  };

  const handleReset = () => {
    setCount((count) => (count = 0));
    console.log(count);
    console.log("reset Clicked");
  };

  const { header, button, container } = styles; //destructor styles

  return (
    <View style={header}>
      <Text> Creating a new app on this shit </Text>
      <Text>A simple NFT Marketplace Course App </Text>
      <Text>Now we build cool stuff and view directly on PC</Text>
      <button onClick={handleIncrease}> + </button>
      <button onClick={handleDecrease}> - </button>
      <button onClick={handleReset}> Reset </button>

      <Text> {count} </Text>

      <StatusBar style="auto" />
    </View>
  );
}

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
