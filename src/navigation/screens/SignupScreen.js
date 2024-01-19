import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StandardButton from "../../components/StandardButton/StandardButton";
import StandardTextInput from "../../components/StandardTextInput/StandardTextInput";
import theme from "../../theme/index";

const SignupScreen = ({ navigation }) => {
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
      {/* <Text style={styles.title}>Signup</Text>

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
      </View> */}
      <View style={styles.content}>
        <Text style={styles.title}>Signup</Text>

        <View style={styles.inputContainer}>
          <StandardTextInput
            onChange={(text) => setUsername(text)}
            placeholder="Username"
            value={username}
            inputStyle={{ color: "#FFFFFF" }}
          />
          <StandardTextInput
            onChange={(text) => setPassword(text)}
            placeholder="Password"
            value={password}
            inputStyle={{ color: "#FFFFFF" }}
            secureTextEntry
          />
          <StandardTextInput
            onChange={(text) => setConfirmPassword(text)}
            placeholder="Confirm Password"
            value={confirmPassword}
            inputStyle={{ color: "#FFFFFF" }}
            secureTextEntry
          />
        </View>

        {/* <StandardButton
          color={theme.lightColors.mainGreen}
          title="Signup"
          size="lg"
          onPress={handleSignup}
          type="solid"
          titleStyle={{ color: "#000000" }}
          icon={null}
          containerStyle={{ width: "60%" }}
        /> */}

        <View style={styles.caption}>
          <StandardButton
            title="Log into Your Account"
            size="sm"
            type="clear"
            titleStyle={{
              color: theme.lightColors.mainTextColor,
              textDecorationLine: "underline",
            }}
            onPress={() => navigation.navigate("Login")}
            icon={null}
          />
        </View>

        <StandardButton
          color={theme.lightColors.mainGreen}
          title="Signup"
          size="lg"
          onPress={handleSignup}
          type="solid"
          titleStyle={{ color: theme.darkColors.mainBlack }}
          icon={null}
          containerStyle={{ width: "60%" }}
        />
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
    marginBottom: 70,
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
    borderWidth: 1,

    marginBottom: 24,
  },
});
export default SignupScreen;
