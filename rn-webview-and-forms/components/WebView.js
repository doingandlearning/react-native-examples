import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        style={styles.container}
        source={{ uri: "https://howdens.com" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
