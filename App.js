import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider } from "@rneui/themed";
import theme from "./src/theme";
import { AuthProvider } from "./src/context/AuthProvider";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          <Navigation />
        </SafeAreaView>
      </ThemeProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
