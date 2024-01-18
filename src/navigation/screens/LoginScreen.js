import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StandardButton from "../../components/StandardButton/StandardButton";
import StandardTextInput from "../../components/StandardTextInput/StandardTextInput";
import theme from "../../theme/index";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Admin") navigation.navigate("Admin Dashboard");
    navigation.navigate("Donor Dashboard");
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
            onChange={(username) => setUsername(username)}
            placeholder="Username"
            value={username}
            inputStyle={{ color: "#FFFFFF" }}
          />
          <StandardTextInput
            onChange={(password) => setPassword(password)}
            placeholder="Password"
            value={password}
            inputStyle={{ color: "#FFFFFF" }}
            secureTextEntry={true}
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
            containerStyle={{ width: "35%" }}
          />
        </View>

        <StandardButton
          color={theme.lightColors.mainGreen}
          title="Login"
          size="lg"
          onPress={handleLogin}
          type="solid"
          titleStyle={{ color: "#000000" }}
          icon={null}
          containerStyle={{ width: "60%" }}
        />
      </View>
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

export default LoginScreen;
