import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Header/Header";
import DonorDashboard from "../screens/DonorDashboard";
import KidDetails from "../screens/KidDetails";
import DonationForm from "../screens/DonationForm";

const Stack = createNativeStackNavigator();

const DonorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Donor Dashboard"
        component={DonorDashboard}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="Kid Details"
        component={KidDetails}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="Donation Form"
        component={DonationForm}
        options={{ header: () => <Header /> }}
      />
    </Stack.Navigator>
  );
};

export default DonorStack;
