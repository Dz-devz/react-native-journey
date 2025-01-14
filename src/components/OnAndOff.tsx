import React, { useState } from "react";
import { Button, Text, View } from "react-native";

function OnAndOff() {
  const [lights, setLights] = useState(false);

  return (
    <View>
      <Text>{lights ? "On" : "Off"}</Text>
      <Button title="Toggle" onPress={() => setLights((prev) => !prev)} />
    </View>
  );
}

export default OnAndOff;
