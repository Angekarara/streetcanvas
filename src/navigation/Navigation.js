import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AdminStack from "./stacks/AdminStack";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AdminStack />
    </NavigationContainer>
  );
};

export default Navigation;
