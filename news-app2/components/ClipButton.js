import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 330,
  },
});

const ClipButton = ({ onPress, enabled }) => {
  const name = enabled ? "bookmark" : "bookmark-o";
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={name} size={30} color="gray" />
    </TouchableOpacity>
  );
};

export default ClipButton;
