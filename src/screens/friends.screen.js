import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const FriendsScreen = () => {
  const friends = [
    { id: "1", name: "Illia", age: 26 },
    { id: "2", name: "Yuliia", age: 26 },
    { id: "3", name: "Volodymyr", age: 26 },
    { id: "4", name: "Vlad", age: 27 },
    { id: "5", name: "Dmytro", age: 27 },
    { id: "6", name: "Andrew", age: 26 },
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={styles.text}>
          {item.name} - {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 14,
    backgroundColor: "#fff",
  },
});

export default FriendsScreen;
