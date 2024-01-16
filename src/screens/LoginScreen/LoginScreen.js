import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import StandardButton from "../../components/StandardButton/StandardButton";
import StandardTextInput from "../../components/StandardTextInput/StandardTextInput";
import theme from "../../Theme/index";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("Login button pressed");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <StandardTextInput
          onChange={null}
          placeholder="Username"
          value={username}
        />
        <StandardTextInput
          onChange={null}
          placeholder="Password"
          value={password}
        />
      </View>

      <StandardButton
        color={theme.lightColors.mainGreen}
        title="Login"
        size="lg"
        onPress={handleLogin}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    width: "60%",
    marginVertical: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
    padding: 5,
  },
});

export default LoginScreen;
