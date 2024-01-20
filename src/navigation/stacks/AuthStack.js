import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import DonorDashboard from "../screens/DonorDashboard";
import Header from "../../components/Header/Header";
import AdminDashboard from "../screens/AdminDashboard";
import KidDetails from "../screens/KidDetails";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DonorDashboard"
        component={DonorDashboard}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="Admin Dashboard"
        component={AdminDashboard}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="Kid Details"
        component={KidDetails}
        options={{ header: () => <Header /> }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
