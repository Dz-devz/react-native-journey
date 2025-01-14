import React, { useState } from "react";
import { Button, Text, View } from "react-native";

function WithState() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>WithoutState</Text>
      <Text>Count: {counter}</Text>
      <Button
        title="Increment"
        onPress={() => setCounter((prev) => prev + 1)}
      />
      <Button
        title="Decrement"
        onPress={() => setCounter((prev) => prev - 1)}
      />
    </View>
  );
}

export default WithState;
