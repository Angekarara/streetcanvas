import React from "react";
import { Button } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";

const StandardButton = ({ title, color, size, ...props }) => {
  return (
    <Button
      title={title}
      color={color}
      size={size}
      style={styles.button}
      {...props}
    />
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});

export default StandardButton;
