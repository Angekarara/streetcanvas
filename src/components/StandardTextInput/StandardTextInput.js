import React from "react";
import { Input } from "@rneui/themed";

const StandardTextInput = ({ placeholder, value, onChange, ...props }) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      {...props}
    />
  );
};

export default StandardTextInput;
