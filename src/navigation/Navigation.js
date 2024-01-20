import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AdminStack from "./stacks/AdminStack";
import DonorStack from "./stacks/DonorStack";
import AuthStack from "./stacks/AuthStack";
import * as SecureStore from 'expo-secure-store';

const Navigation = () => {

  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      let user = await SecureStore.getItemAsync("user");
      // console.log(user);
      return JSON.parse(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      setUser(user);

    };

    fetchData();
  }, []);

  return (
    <NavigationContainer>
      {user ? (
        user.role === "admin" ? <AdminStack /> : <DonorStack />
      ) : (
        <AuthStack />
      )}
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
