import React from "react";

export const WeatherContext = React.createContext();

export function WeatherProvider({ children }) {
  const [data, setData] = React.useState([]);
  const [key, setKey] = React.useState("");

  const getWeather = async (city, country) => {
    try {
      console.log("here");
      if (key === `${city}-${country}`) {
        return data;
      }
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
      );
      const json = await response.json();
      setData(json);
      console.log(json);
      setKey(`${city}-${country}`);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WeatherContext.Provider value={{ getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}
