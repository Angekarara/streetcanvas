import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminDashboard from "../screens/AdminDashboard";
import Header from "../../components/Header/Header";

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Admin Dashboard"
        component={AdminDashboard}
        options={{ header: () => <Header /> }}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
