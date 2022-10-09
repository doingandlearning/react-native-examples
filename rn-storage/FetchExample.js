import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React from "react";

export default function FetchExample({ navigation }) {
  const [planets, setPlanets] = React.useState();

  React.useEffect(() => {
    async function getAndSetData() {
      const response = await fetch("https://swapi.dev/api/planets");
      const data = await response.json();
      setPlanets(data.results);
    }
    getAndSetData();
  }, []);

  const renderItem = (item) => <Text>{item.item.name}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={planets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("home")}
      />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 150,
  },
});
