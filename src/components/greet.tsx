import { Text } from "react-native";
export function Greet({ name }: { name: string }) {
  return (
    <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>
      {name}
    </Text>
  );
}
