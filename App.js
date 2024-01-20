import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider } from "@rneui/themed";
import theme from "./src/theme";
import 'react-native-gesture-handler';
import { AuthProvider } from "./src/context/AuthProvider";
import Navigation from "./src/navigation/Navigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={styles.container}>
            <Navigation />
          </SafeAreaView>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
