import React, { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { UserContext } from "./UserContext";

const ComponentA = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("must used within a UserProvider");
  }

  const { user, setUser } = context;

  return (
    <View>
      <FlatList
        data={Object.values(user)}
        renderItem={({ item }) => <Text>Number: {item}</Text>}
      />
      <Button
        title="Random Number"
        onPress={() =>
          setUser({
            number1: Math.floor(Math.random() * 10 + 1),
            number2: Math.floor(Math.random() * 10 + 1),
            number3: Math.floor(Math.random() * 10 + 1),
            number4: Math.floor(Math.random() * 10 + 1),
          })
        }
      />
    </View>
  );
};

export default ComponentA;
