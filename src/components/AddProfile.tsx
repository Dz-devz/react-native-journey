import React, { useReducer, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
      setName("");
      setAge("");
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
      <View style={styles.profileItem}>
        <Text style={styles.profileText}>{item.text}</Text>
        <Text style={styles.profileText}>{item.age}</Text>
        <Text
          style={styles.editButton}
          onPress={() => {
            updateProfile(item.id);
            setName(item.text);
            setAge(item.age);
          }}
        >
          Update
        </Text>
        <Text
          style={styles.removeButton}
          onPress={() => {
            deleteProfile(item.id);
            setName("");
            setAge("");
          }}
        >
          Delete
        </Text>
      </View>
    );
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
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

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  profileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  profileText: {
    fontSize: 16,
    flex: 1,
  },
  editButton: {
    color: "blue",
    marginRight: 10,
  },
  removeButton: {
    color: "red",
  },
});
