import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import StandardButton from "../../components/StandardButton/StandardButton";
import StandardTextInput from "../../components/StandardTextInput/StandardTextInput";
import theme from "../../Theme/index";

const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    console.log("Login button pressed");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <View style={styles.inputContainer}>
        <StandardTextInput
          onChange={(text) => setUsername(text)}
          placeholder="Username"
          value={username}
        />
        <StandardTextInput
          onChange={(text) => setPassword(text)}
          placeholder="Password"
          value={password}
          secureTextEntry
        />
        <StandardTextInput
          onChange={(text) => setConfirmPassword(text)}
          placeholder="Confirm Password"
          value={confirmPassword}
          secureTextEntry
        />
      </View>

      <StandardButton
        color={theme.lightColors.mainGreen}
        title="Signup"
        size="lg"
        onPress={handleSignup}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    width: "50%",
    marginVertical: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 10,
    padding: 5,
  },
});

export default SignupScreen;
