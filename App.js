import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider } from "@rneui/themed";
import theme from "./src/theme";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
