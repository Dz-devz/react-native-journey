import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

function ButtonComponent() {
  const [text, setText] = useState("");
  return (
    <View>
      {/* <Button
        title={text}
        color="salmon"
        onPress={() => setText("I am Clicked")}
      /> */}
      <Pressable
        style={{
          backgroundColor: "gray",
          borderRadius: 8,
          padding: 16,
          width: 200,
          margin: 8,
        }}
        onPress={() => alert("Pressed")}
      >
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 24,
          }}
        >
          Press me
        </Text>
      </Pressable>

      {/* <Pressable onPressIn={() => alert("On Press In")}>
        <Text style={{ color: "red" }}>Press me</Text>
      </Pressable>

      <Pressable onPressOut={() => alert("On Press Out")}>
        <Text style={{ color: "coral" }}>Press me</Text>
      </Pressable>

      <Pressable onLongPress={() => alert("On Long Press")}>
        <Text style={{ color: "coral" }}>Press me</Text>
      </Pressable> */}
    </View>
  );
}

export default ButtonComponent;
