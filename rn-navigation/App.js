import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  DevSettings,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <View>
        <Text>Settings:</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings", { type: "Display" })}
        >
          <Text>Display</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Settings", { type: "Audio" })}
        >
          <Text>Audio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings", { type: "Video" })}
        >
          <Text>Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SettingsScreen({ route: { params } }) {
  return (
    <View>
      <Text>
        {params?.type ? `Welcome to the ${params.type} settings` : "Settings"}
      </Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
