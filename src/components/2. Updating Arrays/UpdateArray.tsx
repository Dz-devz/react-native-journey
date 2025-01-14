import React, { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

function UpdateArray() {
  const [user, setUser] = useState(["Alex", "Darwin", "Jordan"]);

  return (
    <View>
      <FlatList
        data={user}
        keyExtractor={(friend) => friend}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Button title="Add User" onPress={() => setUser([...user, "Darwin"])} />
      <Button
        title="Delete User"
        onPress={() => setUser(user.filter((u) => u !== "Dz"))}
      />
      <Button
        title="Update User"
        onPress={() => setUser(user.map((u) => (u === "Darwin" ? "Dz" : u)))}
      />
    </View>
  );
}

export default UpdateArray;
