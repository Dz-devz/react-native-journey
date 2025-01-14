import React from "react";
import { Text, View } from "react-native";
import { design } from "../utils/style";

function ExternalStyle() {
  return (
    <View>
      <Text style={design.textStyle}>ExternalStyle</Text>
    </View>
  );
}

export default ExternalStyle;
