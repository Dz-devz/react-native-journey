import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

function MyEffect() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.warn("userEffect");
  }, [value]);

  return (
    <View>
      <Text>{value}</Text>

      <Button title="Increment" onPress={() => setValue((prev) => prev + 1)} />
    </View>
  );
}

export default MyEffect;
