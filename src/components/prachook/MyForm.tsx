import useFormInput from "@/src/hooks/useFormInput";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const MyForm = () => {
  const [data, setData] = useState<{ name: string; email: string }[]>([]);

  const nameInput = useFormInput("");
  const emailInput = useFormInput("");

  const handleSubmit = () => {
    console.log(nameInput.value);
    console.log(emailInput.value);
    setData((prev) => [
      ...prev,
      { name: nameInput.value, email: emailInput.value },
    ]);
  };

  return (
    <View>
      <Text>My Form</Text>
      <TextInput
        placeholder="Enter Name"
        value={nameInput.value}
        onChangeText={nameInput.onchange}
      />
      <TextInput
        placeholder="Enter Email"
        value={emailInput.value}
        onChangeText={emailInput.onchange}
        keyboardType="email-address"
      />
      <Button title="Submit" onPress={handleSubmit} />

      {data.map((item, index) => (
        <Text key={index}>
          {index + 1}. {item.name} - {item.email}
        </Text>
      ))}
    </View>
  );
};

export default MyForm;
