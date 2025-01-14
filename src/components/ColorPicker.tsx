import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

const colors = ["red", "yellow", "green", "blue"];

function ColorPicker() {
  const [selected, setColor] = useState("fff");
  return (
    <View>
      <Text
        style={{
          color: selected,
        }}
      >
        Color Picker
      </Text>
      {colors.map((color) => (
        <Pressable
          style={{
            backgroundColor: color,
            width: 50,
            height: 50,
            borderRadius: 100,
          }}
          onPress={() => setColor(color)}
        />
      ))}
    </View>
  );
}

export default ColorPicker;
