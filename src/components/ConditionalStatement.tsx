import React from "react";
import { Text, View } from "react-native";

const ValidPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>Invalid Password</Text>;

function Password({ isValid }: { isValid: boolean }) {
  if (isValid) {
    return <ValidPassword />;
  }

  return <InvalidPassword />;
}

function ConditionalStatement() {
  return (
    <View>
      <Text>ConditionalStatement</Text>
      <Password isValid={true} />
    </View>
  );
}

export default ConditionalStatement;
