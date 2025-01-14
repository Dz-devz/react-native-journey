import React from "react";
import { Button, Text, View } from "react-native";

function WithoutState() {
  let counter = 0;

  return (
    <View>
      <Text>WithoutState</Text>
      <Text>Count: {counter}</Text>
      <Button title="Increment" onPress={() => counter++} />
    </View>
  );
}

export default WithoutState;
