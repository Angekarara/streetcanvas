import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StandardButton from "../../components/StandardButton/StandardButton";
import StandardTextInput from "../../components/StandardTextInput/StandardTextInput";
import theme from "../../theme/index";
import axios from "axios";
import { setAuthStatus, setAuthLoaded, setAuthToken, setAuthUser } from "../../redux/authReducer";
import { useDispatch } from "react-redux";
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false)

  const passwordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = async () => {
    // await login({ username, password });
    setLoading(true)
    const response = await axios.post("https://donation-api-2yeu.onrender.com/users/login", {
      email: email,
      password: password
    })

    SecureStore.setItemAsync('token', response.data.token)
    SecureStore.setItemAsync('user', JSON.stringify(response.data.data))
    dispatch(setAuthStatus(true))
    dispatch(setAuthLoaded(true))
    dispatch(setAuthToken(response.data.token))
    dispatch(setAuthUser(JSON.stringify(response.data.data)))

    if (response.data.data.role === "admin") {
      navigation.navigate("Admin Dashboard");
    } else if (response.data.data.role === "user") {
      navigation.navigate("DonorDashboard");
    }
    setLoading(false)
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={{ width: 100 }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputContainer}>
          <StandardTextInput
            onChange={(email) => setEmail(email)}
            placeholder="Username"
            value={email}
            inputStyle={{ color: "#FFFFFF" }}
          />
          <StandardTextInput
            onChange={(password) => setPassword(password)}
            placeholder="Password"
            value={password}
            inputStyle={{ color: "#FFFFFF" }}
            secureTextEntry={!showPassword}
          />
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={24} color="white"
            style={{ position: "absolute", right: 55, top: 100 }}
            onPress={passwordVisibility}
          />
        </View>

        <View style={styles.caption}>
          <StandardButton
            title="Create New Account"
            size="sm"
            type="clear"
            titleStyle={{
              color: theme.lightColors.mainTextColor,
              textDecorationLine: "underline",
            }}
            onPress={() => navigation.navigate("Signup")}
            icon={null}
          />
        </View>

        {loading ? (

          <StandardButton
            color={theme.lightColors.mainGreen}
            title="Loading..."
            size="lg"
            onPress={handleLogin}
            type="solid"
            titleStyle={{ color: theme.darkColors.mainBlack }}
            icon={null}
            containerStyle={{ width: "60%" }}
          />
        ) : (
          <StandardButton
            color={theme.lightColors.mainGreen}
            title="Login"
            size="lg"
            onPress={handleLogin}
            type="solid"
            titleStyle={{ color: theme.darkColors.mainBlack }}
            icon={null}
            containerStyle={{ width: "60%" }}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.darkColors.mainBlack,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 44,
  },
  content: {
    backgroundColor: theme.darkColors.darkGray,
    flex: 1,
    width: "80%",
    maxHeight: "60%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: theme.lightColors.mainTextColor,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 50,
    paddingVertical: 24,
  },
  caption: {
    marginBottom: 24,
  },
});

export default LoginScreen;
