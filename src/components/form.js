import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

const Form = ({ initialValues, onSubmit }) => {
  const [title, setTitle] = useState(initialValues?.title || '')
  const [body, setBody] = useState(initialValues?.body || '');

  return (
    <>
      <Text style={styles.label}>Enter title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Enter content:</Text>
      <TextInput style={styles.input} value={body} onChangeText={(text) => setBody(text)} />
      <Button
        title="Save"
        onPress={() => onSubmit(title, body)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default Form;
