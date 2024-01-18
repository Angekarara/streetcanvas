import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthProvider";
import AdminStack from "./stacks/AdminStack";
import DonorStack from "./stacks/DonorStack";
import AuthStack from "./stacks/AuthStack";

const Navigation = () => {
  const { auth } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {auth && auth.username === "Admin" ? (
          <AdminStack />
        ) : auth && auth.username === "Donor" ? (
          <DonorStack />
        ) : (
          <AuthStack />
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
