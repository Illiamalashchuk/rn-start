import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context } from '../context/blog.context';
import Form from '../components/form';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);

  const id = navigation.getParam('id');
  const blogPost = state.find(el => el.id === id);

  return (
    <View>
      <Form
        initialValues={{
          title: blogPost?.title,
          body: blogPost?.body,
        }}
        onSubmit={(title, body) => {
          editBlogPost(id, title, body, () => {
            navigation.pop();
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default EditScreen;
