import { useReducer, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

type TaskProps = {
  id: string;
  text: string;
};

type State = {
  tasks: TaskProps[];
};

type ActionType = {
  type: "ADD_TODO" | "DELETE_TODO" | "reset";
  payload: string;
};

const initialState = { tasks: [] };

const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        tasks: [
          ...state.tasks,
          { id: Date.now.toString(), text: action.payload },
        ],
      };
    case "DELETE_TODO":
      return {
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };
    case "reset":
      return {
        tasks: [],
      };
    default:
      return state;
  }
};

function ReducerTask() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputTask, setTask] = useState("");

  const AddTask = () => {
    dispatch({ type: "ADD_TODO", payload: inputTask });
  };

  const DeleteTask = (id: string) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const renderItem = ({ item }: { item: TaskProps }) => {
    return (
      <View>
        <Text>{item.text}</Text>
        <Button title="Delete Task" onPress={() => DeleteTask(item.id)} />
      </View>
    );
  };

  return (
    <View>
      <Text>Reducer Task</Text>
      <TextInput
        placeholder="Test Input"
        value={inputTask}
        onChangeText={setTask}
      />
      <Button title="Add task" onPress={AddTask} />
      <FlatList
        data={state.tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

export default ReducerTask;
