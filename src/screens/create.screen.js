import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context } from '../context/blog.context';
import Form from '../components/form';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('');

  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Form
        onSubmit={(title, body) => {
          addBlogPost(title, body, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default CreateScreen;
