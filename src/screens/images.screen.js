import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ImageItem from "../components/image-item.js";
import Beach from "../../assets/beach.jpg";
import Forest from "../../assets/forest.jpg";
import Mountain from "../../assets/mountain.jpg";

const ImagesScreen = () => {
  return (
    <View>
      <ImageItem title="Forest" image={Beach} />
      <ImageItem title="Beach" image={Forest} />
      <ImageItem title="Mountain" image={Mountain} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImagesScreen;
