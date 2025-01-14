import React from "react";
import { Text, View } from "react-native";

function ChildComponent({ name }: { name: string }) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default ChildComponent;
