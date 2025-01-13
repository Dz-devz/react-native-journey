import React from "react";
import { View } from "react-native";
import DynamicCompontent from "../components/DynamicCompontent";

function Index() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <ImageComponent />
      <Greet name="Darwin" />
      <Greet name="My name is Darwin and I love Coding" />
      <ButtonComponent /> */}
      <DynamicCompontent />
    </View>
  );
}

export default Index;
