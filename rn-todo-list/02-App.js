import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  const [state, setState] = React.useState({
    year: 2022,
    name: "Kevin Cunningham",
    colors: ["red"],
  });

  function updateYear() {
    setState({ ...state, year: state.year + 1 });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is: {state.name}</Text>
      <Text style={styles.text} onPress={() => updateYear()}>
        The year is: {state.year}
      </Text>
      <Text style={styles.text}>My colors are {state.colors[0]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
