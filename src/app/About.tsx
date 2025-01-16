import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const About = () => {
  return (
    <View>
      <Text>About</Text>
      <Link href="/users/10">Users</Link>
    </View>
  );
};

export default About;
