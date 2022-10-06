import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  const [state, setState] = React.useState({
    year: 2022,
    name: "Kevin Cunningham",
    age: 39,
    colors: ["red"],
  });

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <>
          <Text>Name: {state.name}</Text>
          <Text>Age: {state.age}</Text>
        </>
      )}
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
