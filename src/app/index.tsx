import React from "react";
import { Text, View } from "react-native";
import { Greet } from "../components/greet";

function Index() {
  return (
    <View>
      <Text className="">Hello World</Text>
      <Greet />
    </View>
  );
}

export default Index;
