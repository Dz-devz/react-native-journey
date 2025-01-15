import React, { useReducer, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

type ProfileProps = {
  id: string;
  text: string;
  age: string;
};

type State = {
  profiles: ProfileProps[];
};

type ActionType =
  | { type: "ADD_PROFILE"; text: string; age: string }
  | { type: "UPDATE_PROFILE"; id: string; text?: string; age?: string }
  | { type: "DELETE_PROFILE"; id: string };

const initialState = { profiles: [] };

const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "ADD_PROFILE":
      return {
        profiles: [
          ...state.profiles,
          {
            id: Date.now().toString(),
            text: action.text,
            age: action.age,
          },
        ],
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        profiles: state.profiles.map((pro) =>
          pro.id === action.id
            ? {
                ...pro,
                text: action.text ?? pro.text,
                age: action.age ?? pro.age,
              }
            : pro
        ),
      };
    case "DELETE_PROFILE":
      return {
        profiles: state.profiles.filter((pro) => pro.id !== action.id),
      };
    default:
      return state;
  }
};

const AddProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addProfile = () => {
    if (name.trim() && age.trim()) {
      dispatch({
        type: "ADD_PROFILE",
        text: name,
        age: age,
      });
      setName("");
      setAge("");
    }
  };

  const updateProfile = (id: string) => {
    if (name.trim() && age.trim()) {
      dispatch({ type: "UPDATE_PROFILE", id, text: name, age: age });
    }
  };

  const deleteProfile = (id: string) => {
    dispatch({
      type: "DELETE_PROFILE",
      id: id,
    });
  };

  const renderProfile = ({ item }: { item: ProfileProps }) => {
    return (
      <View>
        <Text>{item.text}</Text>
        <Text>{item.age}</Text>
        <Text onPress={() => updateProfile(item.id)}>Update</Text>
        <Text onPress={() => deleteProfile(item.id)}>Delete</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Add Profile</Text>
      <TextInput placeholder="Enter Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Enter Age" value={age} onChangeText={setAge} />
      <Button title="Add Profile" onPress={addProfile} />
      <FlatList
        data={state.profiles}
        keyExtractor={(item) => item.id}
        renderItem={renderProfile}
      />
    </View>
  );
};

export default AddProfile;
