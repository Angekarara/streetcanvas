import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "@rneui/themed";
import theme from "./src/Theme";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen/SignupScreen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.js to p!</Text>
        <LoginScreen />
        <SignupScreen />

        {/* <View style={styles.buttonContainer}>
          <StandardButton color={"#A7E821"} title={"My button"} size={"lg"} />
          <View style={styles.inputContainer}>
            <StandardTextInput
              onChange={null}
              placeholder={"Enter value"}
              value={null}
            />
          </View>
        </View> */}

        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "80%",
    height: "auto",
  },
  inputContainer: {
    marginVertical: 12,
    borderRadius: "50px",
  },
});
