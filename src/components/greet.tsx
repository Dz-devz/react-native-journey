import { Text, View } from "react-native";
export function Greet({ name }: { name: string }) {
  return (
    <View
      style={{
        width: "80%",
        height: 100,
        boxShadow: "5px 10px 5px 10px #000",
        backgroundColor: "#f2f2f2",
        marginTop: 20,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          textAlign: "left",
          fontSize: 18,
          fontWeight: "bold",
          margin: 24,
        }}
      >
        {name}
      </Text>
    </View>
  );
}
