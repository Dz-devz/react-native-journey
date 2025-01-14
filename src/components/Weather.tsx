import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const cities: Record<string, string> = {
  Newyork: "25C, Clear",
  Philippines: "21C, Rain",
  USA: "20F, Cloudy",
};

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeather = () => {
    setWeather(cities[city] || "No Data available");
  };

  return (
    <View>
      <Text>Weather App</Text>
      <TextInput placeholder="Enter City" value={city} onChangeText={setCity} />
      {weather && <Text>{weather}</Text>}
      <Button title="Get Weather" onPress={getWeather} />
    </View>
  );
}

export default Weather;
