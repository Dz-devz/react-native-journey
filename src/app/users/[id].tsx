import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Users = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>User - {id}</Text>
      <Link href="/About">About</Link>
    </View>
  );
};

export default Users;
