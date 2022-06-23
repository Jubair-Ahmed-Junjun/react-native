import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Countries from "./components/Countries";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Countries></Countries>
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
});
