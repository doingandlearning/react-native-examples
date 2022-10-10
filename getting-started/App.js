import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Button from "./components/Button";
import ListComponent from "./components/FlatList";
import FlatListSelect from "./components/FlatListSelect";
import VirtualList from "./components/VirtualizedList";
import ModalComponent from "./components/Modal";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      {/* <Button /> */}
      {/* <ListComponent /> */}
      {/* <FlatListSelect /> */}
      {/* <VirtualList /> */}
      {/* <ModalComponent /> */}
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
});
