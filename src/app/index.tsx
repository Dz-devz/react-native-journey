import React from "react";
import { Button, Text, View } from "react-native";
import "../../global.css";
import useCountStore from "./store/store";

function Index() {
  const count = useCountStore((state) => state.count);

  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);

  const disable = count === 0;

  return (
    <View className="bg-teal-500">
      <Text>{count}</Text>
      <Button title="Increment" onPress={increment} />
      {disable ? (
        <Button title="Decrement" disabled />
      ) : (
        <Button title="Decrement" onPress={decrement} />
      )}
      {/* <ImageComponent /> */}
      {/* <Greet name="Darwin" />
      <Greet name="My name is Darwin and I love Coding" /> */}
      {/* <ButtonComponent /> */}
      {/* <DynamicCompontent /> */}
      {/* <Inlinetyles /> */}
      {/* <InternalStyle /> */}
      {/* <ExternalStyle /> */}
      {/* <ListData /> */}
      {/* <HugeComponent /> */}
      {/* <ParentComponent /> */}
      {/* <WithoutState /> */}
      {/* <WithState /> */}
      {/* <UpdateArray />
      <UpdateObject /> */}
      {/* <SharingState /> */}
      {/* <Weather /> */}
      {/* <ColorPicker /> */}
      {/* <AddTask /> */}
      {/* <MyEffect /> */}
      {/* <DataFetching /> */}
      {/* <ReducerTask /> */}
      {/* <AddProfile /> */}
      {/* <ContextComponent /> */}
      {/* <WithCustomHooks /> */}
      {/* <MyForm /> */}
      {/* <Text className="text-red-500">Text</Text> */}
    </View>
  );
}

export default Index;
