import React, { useState } from "react";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type TodoProps = {
  id: string;
  text: string;
};

type TodoItemProps = {
  item: TodoProps;
};
function AddTask() {
  const [tasks, setTasks] = useState<TodoProps[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  const addTask = () => {
    setTasks([...tasks, { id: Date.now().toString(), text: inputTask }]);
    setInputTask("");
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((tas) => tas.id !== id));
  };

  const updateTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: inputTask } : t)));
  };

  const renderTodo = ({ item }: TodoItemProps) => {
    return (
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text>{item.text}</Text>
        <Button title="Up" onPress={() => updateTask(item.id)} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>Todo List</Text>
      <TextInput
        placeholder="Enter Task"
        value={inputTask}
        onChangeText={setInputTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={renderTodo}
      />
    </View>
  );
}

export default AddTask;
