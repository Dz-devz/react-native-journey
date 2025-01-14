import React from "react";
import { View } from "react-native";

function Inlinetyles() {
  return (
    <View>
      <View style={{ backgroundColor: "red", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "blue", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "green", width: 100, height: 100 }} />
    </View>
  );
}

export default Inlinetyles;
