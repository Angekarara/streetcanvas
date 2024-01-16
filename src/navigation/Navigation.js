import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AdminStack from "./stacks/AdminStack";
import DonorStack from "./stacks/DonorStack";

const Navigation = () => {
  const email = "admin@streetcanvas.com"; // Add Context and check if email submitted on login is `admin@streetcanvas.com`

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {email !== "admin@streetcanvas.com" ? <AdminStack /> : <DonorStack />}
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
