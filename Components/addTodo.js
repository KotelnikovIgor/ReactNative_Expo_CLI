import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = text => {
    setText(text);
  };

  const pressHandler = () => {
    if (text.trim()) {
      submitHandler(text);
      setText("");
    } else {
      Alert.alert("don`t work");
    }
  };
  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button onPress={pressHandler} title="add Todo" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb"
  }
});
