import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Weather", { city: "Kettering", country: "GB" })
        }
      >
        <Text>Kettering, GB</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Weather", { city: "Paris", country: "FR" })
        }
      >
        <Text>Paris, FR</Text>
      </TouchableOpacity>
    </View>
  );
}

function WeatherScreen({ navigation, route }) {
  const [isLoading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState([]);

  const city = route.params.city;
  const country = route.params.country;

  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
      );
      const json = await response.json();
      setWeatherData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>{JSON.stringify(item)}</Text>
      <Text>{item}</Text>
      <Text>{item.main.temp}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text>{JSON.stringify(weatherData)}</Text>
          <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
      <StatusBar style="auto" />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
