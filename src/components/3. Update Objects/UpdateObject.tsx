import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const UpdateObject = () => {
  const [series, setSeries] = useState({
    title: "Our Beloved Summer",
    description: "Best of the best kdrama of all time",
    rating: 10,
  });

  const handleClick = () => {
    setSeries({ ...series, rating: 8 });
  };

  return (
    <View>
      <Text>Update Object</Text>
      <Text>{series.title}</Text>
      <Text>{series.description}</Text>
      <Text>{series.rating}</Text>
      <Button title="Change Ratings" onPress={handleClick} />
    </View>
  );
};

export default UpdateObject;
