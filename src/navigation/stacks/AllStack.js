import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import AdminDashboard from '../screens/AdminDashboard';
import KidDetails from '../screens/KidDetails';
import RegisterForm from '../screens/RegisterForm';
import DonationList from '../screens/DonationList';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import DonorDashboard from '../screens/DonorDashboard';
import DonationForm from '../screens/DonationForm';
import * as SecureStore from 'expo-secure-store';

const Stack = createNativeStackNavigator();

const AllStack = () => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            let storedUser = await SecureStore.getItemAsync('user');
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error('Error fetching user:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const fetchedUser = await getUser();
            setUser(fetchedUser);
        };

        fetchData();
    }, []);

    return (
        <NavigationContainer>
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
                    name="Admin Dashboard"
                    component={AdminDashboard}
                    options={{ header: () => <Header /> }}
                />

                <Stack.Screen
                    name="Register Form"
                    component={RegisterForm}
                    options={{ header: () => <Header /> }}
                />
                <Stack.Screen
                    name="DonationList"
                    component={DonationList}
                    options={{ header: () => <Header /> }}
                />
                <Stack.Screen
                    name="DonorDashboard"
                    component={DonorDashboard}
                    options={{ header: () => <Header /> }}
                />
                <Stack.Screen
                    name="Kid Details"
                    component={KidDetails}
                    options={{ header: () => <Header /> }}
                />
                <Stack.Screen
                    name="DonationForm"
                    component={DonationForm}
                    options={{ header: () => <Header /> }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default AllStack;
