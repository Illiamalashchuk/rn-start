import React, { useContext } from "react";
import { Text, StyleSheet, View, FlatList, TextInput, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

import { Context } from '../context/blog.context';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const id = navigation.getParam('id');

  const blogPost = state.find(el => el.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.body}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <EvilIcons style={styles.icon} name="pencil" size={35} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

});

export default ShowScreen;
