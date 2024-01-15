import React from "react";
import { Image } from "react-native";

const Logo = ({ width, height }) => {
  return (
    <Image
      source={require("../../../assets/logo-word.png")}
      style={{ width, height }}
    />
  );
};

export default Logo;
