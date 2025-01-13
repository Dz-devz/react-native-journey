import React from "react";
import { Image, View } from "react-native";

function ImageComponent() {
  return (
    <View>
      <Image
        source={require("../assets/imageyujin.jpg")}
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
        }}
      />
    </View>
  );
}

export default ImageComponent;
