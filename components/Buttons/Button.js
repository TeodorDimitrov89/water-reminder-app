import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Button = ({ onPress, icon, color, size, children, buttonStyles }) => {
  return (
    <Pressable onPress={onPress} style={buttonStyles}>
      <Ionicons name={icon} size={size} color={color} />
      {children}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
