import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.text}>Application</Text>
      <Button onPress={() => navigate("Friends")} title="Friends" />
      <Button onPress={() => navigate("Images")} title="Images" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
});

export default HomeScreen;
