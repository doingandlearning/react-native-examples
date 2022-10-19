import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import * as SecureStore from "expo-secure-store";
import React from "react";

export default function SecureStoreApp({ navigation }) {
  const [password, setPassword] = React.useState();

  React.useEffect(() => {
    async function getAndSetPassword() {
      const storedPassword = await SecureStore.getItemAsync("rn-password");
      if (storedPassword) {
        setPassword(storedPassword);
      }
    }
    getAndSetPassword();
  }, []);

  async function handleStore() {
    try {
      await SecureStore.setItemAsync("rn-password", password);
      // console.log("Password saved");
    } catch (error) {
      // console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Add your password and click set:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button onPress={handleStore} title="Store password"></Button>
      <Text>The password is: {password}</Text>
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
