import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Header/Header";
import AdminDashboard from "../screens/AdminDashboard";
import KidDetails from "../screens/KidDetails";

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator>
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

export default AdminStack;
