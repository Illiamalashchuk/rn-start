import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageItem = (props) => {
  const { title, image } = props;

  return (
    <View>
      <Text>{title}</Text>
      <Image source={image} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageItem;
