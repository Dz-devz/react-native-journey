import React from "react";
import { Text, View } from "react-native";
import ImageComponent from "./ImageComponent";

function DynamicCompontent() {
  const carname = "Dz.dev";
  const price = "30,000";
  const description = "This is a beautiful soul";
  return (
    <View>
      <Text>{price}</Text>
      <ImageComponent />
      <Text>{carname}</Text>
      <Text>Rating 5</Text>
      <Text>{description}</Text>
    </View>
  );
}

export default DynamicCompontent;
