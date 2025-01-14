import React from "react";
import { Image, Text, View } from "react-native";

type ProductTypesProps = {
  name: string;
  image: string;
  price: number;
  desc: string;
  isFeat: boolean;
};

function ProductComponent({
  name,
  image,
  price,
  desc,
  isFeat,
}: ProductTypesProps) {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 12,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{ width: 120, height: 120, borderRadius: 10 }}
      />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: 10,
          gap: 12,
        }}
      >
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text
          style={{
            width: 200,
            height: 30,
            padding: 4,
            borderRadius: 4,
            backgroundColor: "gray",
          }}
        >
          {isFeat ? "Feature" : ""}
        </Text>
        <Text>{desc}</Text>
      </View>
    </View>
  );
}

export default ProductComponent;
