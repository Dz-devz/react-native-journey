import { useReducer } from "react";
import { Button, Text, View } from "react-native";

type StateProps = {
  count: number;
};

type Action =
  | {
      type: "increment";
    }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "error" };

const initialState = { count: 0 };

const reducer = (state: StateProps, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <View>
        <Button
          title="Increment"
          onPress={() => dispatch({ type: "increment" })}
        />
        <Button
          title="Decrement"
          onPress={() => dispatch({ type: "decrement" })}
        />
        <Button title="Reset" onPress={() => dispatch({ type: "reset" })} />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
//   counterText: {
//     fontSize: 32,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "80%",
//   },
// });

export default ReducerCounter;
