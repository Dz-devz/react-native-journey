import React from "react";
import { FlatList, Text, View } from "react-native";

function ANDOperatorAndTernary() {
  const groceries = ["banana", "apple", "orange", "chocolate"];

  return (
    <View>
      <Text>ANDOperator</Text>
      <Text>Cart</Text>
      {groceries.length > 0 ? <Text>{groceries.length}</Text> : <Text>0</Text>}
      <FlatList
        data={groceries}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}

export default ANDOperatorAndTernary;
