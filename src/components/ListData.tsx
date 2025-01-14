import React from "react";
import { FlatList, Text, View } from "react-native";

function ListData() {
  const fruits = ["Banana", "Apple", "Orange"];
  return (
    <View>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
}

export default ListData;
