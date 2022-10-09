import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AsyncStorageApp from "./AsyncStorageApp";
import SecureStoreApp from "./SecureStoreApp";
import SQLApp from "./SQLiteApp";
import FetchExample from "./FetchExample";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Fetch Example"
        onPress={() => navigation.navigate("fetch")}
      />
      <Button
        title="Secure Store"
        onPress={() => navigation.navigate("secure-store")}
      />
      <Button
        title="Async Storage"
        onPress={() => navigation.navigate("async-storage")}
      />
      <Button title="SQL Lite" onPress={() => navigation.navigate("sqllite")} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="fetch" component={FetchExample} />
        <Stack.Screen name="secure-store" component={SecureStoreApp} />
        <Stack.Screen name="async-storage" component={AsyncStorageApp} />
        <Stack.Screen name="sqllite" component={SQLApp} />
      </Stack.Navigator>
    </NavigationContainer>
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
