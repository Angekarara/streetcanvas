import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StandardButton from "../../components/StandardButton/StandardButton";
import StandardTextInput from "../../components/StandardTextInput/StandardTextInput";
import theme from "../../theme/index";

const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    console.log("signup button pressed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={{ width: 100 }}
        />
      </View>
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
        type="solid"
        titleStyle={{ color: "#000000" }}
        icon={null}
        containerStyle={{ width: "60%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
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
    color: "#FFFFFF",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 50,
    paddingVertical: 24,
  },
  caption: {
    borderWidth: 1,
  },
});
export default SignupScreen;
