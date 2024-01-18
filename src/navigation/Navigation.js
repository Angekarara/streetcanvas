import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AdminStack from "./stacks/AdminStack";
import DonorStack from "./stacks/DonorStack";
import AuthStack from "./stacks/AuthStack";

const Navigation = () => {
  // const username = "admin@streetcanvas.com"; // Add Context and check if username submitted on login is `Admin`
  const username = null;

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {!username ? (
          <AuthStack />
        ) : username !== "Admin" ? (
          <AdminStack />
        ) : (
          <DonorStack />
        )}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
});

export default Navigation;
