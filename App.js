import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home/Home";

export default function App() {
  return (
    <>
      <StatusBar translucent style="auto" />
      <ScrollView style={styles.container}>
        <Home />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
