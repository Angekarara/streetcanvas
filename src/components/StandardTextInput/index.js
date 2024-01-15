import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { TextInput } from "@rneui/themed";
import { Input } from "@rneui/themed";

const StandardTextInput = ({ placeholder, value, onChange }) => {
  return <Input placeholder={placeholder} value={value} onChange={onChange} />;
};

export default StandardTextInput;
