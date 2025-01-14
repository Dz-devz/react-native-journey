import React, { useState } from "react";
import { View } from "react-native";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";

function SharingState() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <ComponentOne
        count={count}
        onClickHandler={() => setCount((prev) => prev + 1)}
      />
      <ComponentTwo
        count={count}
        onClickHandler={() => setCount((prev) => prev + 1)}
      />
    </View>
  );
}

export default SharingState;
