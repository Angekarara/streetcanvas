import React from "react";
import { TextInput } from "@rneui/themed";
import { StyleSheet } from "react-native";

export const StandardTextInput = (placeholder, value, onchange) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onchange={onchange}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
export default StandardTextInput;
