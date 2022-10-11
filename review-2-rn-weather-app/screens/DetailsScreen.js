import React from "react";
import { Pressable, Text, View } from "react-native";
import { WeatherContext } from "../context/WeatherContext";

function DetailsScreen({ route, navigation }) {
  const [description, setDescription] = React.useState("");
  const [windspeed, setWindspeed] = React.useState("");
  const [timetosunset, setTimetosunset] = React.useState(0);

  const { getWeather } = React.useContext(WeatherContext);

  const { city, country } = route.params;

  const fetchData = async () => {
    const data = await getWeather(city, country);
    setDescription(data.weather[0].description);
    setWindspeed(data.wind.speed);
    const now = new Date();
    const sunset = new Date(data.sys.sunset * 1000);
    setTimetosunset(Math.floor((sunset - now) / 1000 / 60));
  };

  React.useEffect(() => {
    fetchData();
  }, [route.params]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 5, justifyContent: "center", alignItems: "center" }}>
        <Text>It's {description}!</Text>
        <Text>The wind is blowing {windspeed} miles per hour.</Text>
        <Text>It's {timetosunset} minutes to the next sunset.</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text>Go home</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default DetailsScreen;
