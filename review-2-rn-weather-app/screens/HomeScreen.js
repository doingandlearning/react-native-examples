import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import InputField from "../components/InputField";
import { WeatherContext } from "../context/WeatherContext";

function HomeScreen({ navigation }) {
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [data, setData] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const { getWeather } = React.useContext(WeatherContext);

  const fetchData = async () => {
    try {
      const json = await getWeather(city, country);
      setData(json);
      setDescription(json.weather[0].description);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, height: 70 }}>
        <InputField
          style={{ width: 200 }}
          inputValue={city}
          inputChange={setCity}
          placeholder="What city?"
        />
        <InputField
          style={{ width: 200 }}
          inputValue={country}
          inputChange={setCountry}
          placeholder="What country?"
        />
        <TouchableOpacity onPress={fetchData} style={styles.buttonContainer}>
          <Text style={[styles.button, styles.submit]}>Get the weather</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2 }}>
        <Text>The weather: {description}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text onPress={() => navigation.navigate("Details", { city, country })}>
          See more details
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
  },
  button: {
    justifyContent: "center",
    height: 50,
    backgroundColor: "#ffffff",
    width: 200,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    alignItems: "center",
  },
  submit: {
    color: "#666666",
    fontWeight: "600",
  },
});

export default HomeScreen;
