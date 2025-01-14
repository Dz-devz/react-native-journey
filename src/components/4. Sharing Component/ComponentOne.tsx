import React from "react";
import { Button, Text, View } from "react-native";

const ComponentOne = ({
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

export default ComponentOne;
