import React from "react";
import { FlatList, Text, View } from "react-native";

function ArrayOfObject() {
  const locations = [
    {
      id: 1,
      name: "Japan",
    },
    {
      id: 2,
      name: "Phil",
    },
    {
      id: 3,
      name: "USA",
    },
    {
      id: 4,
      name: "Guatemala",
    },
    {
      id: 5,
      name: "Alaska",
    },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={locations}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

export default ArrayOfObject;
