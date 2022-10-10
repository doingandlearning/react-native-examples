import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import Hooks from "./components/Hooks";

import { DarkContext, DarkProvider } from "./context/DarkContext";

function AppInternals() {
  const [dark] = React.useContext(DarkContext);
  return (
    <SafeAreaView
      style={[styles.container, dark && { backgroundColor: "black" }]}
    >
      <Hooks>
        <Text>Hello!</Text>
      </Hooks>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <DarkProvider>
      <AppInternals />
    </DarkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: StatusBar.currentHeight || 0,
  },
});
