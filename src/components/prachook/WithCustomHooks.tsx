import useFetch from "@/src/hooks/useFetch";
import React from "react";
import { FlatList, Text, View } from "react-native";

interface Todo {
  id: number;
  title: string;
}

const WithCustomHooks = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item: Todo) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default WithCustomHooks;
