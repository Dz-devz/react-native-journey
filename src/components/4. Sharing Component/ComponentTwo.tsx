import React from "react";
import { Button, Text, View } from "react-native";

const ComponentTwo = ({
  count,
  onClickHandler,
}: {
  count: number;
  onClickHandler: () => void;
}) => {
  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment Count" onPress={onClickHandler} />
    </View>
  );
};

export default ComponentTwo;
