import React from "react";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const screen = {
  height,
  width,
  headerHeight: height / 8,
  headerWidth: width,
};

export default screen;
