import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DarkContext } from "../context/DarkContext";

function Hooks({ children }) {
  const [count, setCount] = React.useState(0);
  const [dark, setDark] = React.useContext(DarkContext);

  React.useEffect(() => {
    console.log(`Currently the lights are ${dark ? "off" : "on"}.`);
    // subscription ..
    return () => {
      // unsubscribe
    };
  }, [dark]);

  return (
    <>
      {children}
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={[dark && { backgroundColor: "black" }]}
      >
        <Text style={[{ fontSize: "42px" }, dark && { color: "white" }]}>
          {count}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDark(!dark)}>
        <Text style={[dark && { color: "white" }]}>
          Turn the lights {dark ? "on" : "off"}
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default Hooks;
