import React from "react";
import { StyleSheet, Text, View } from "react-native";

function InternalStyle() {
  return (
    <View>
      <Text style={styles.textStyle}>InternalStyle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "green",
    fontSize: 30,
    backgroundColor: "red",
    margin: 20,
    padding: 40,
  },
});

export default InternalStyle;
