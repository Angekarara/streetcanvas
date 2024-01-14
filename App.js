import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider, Button } from "@rneui/themed";
import theme from "./src/Theme";
import StandardButton from "./src/components/StandardButton";
import StandardTextInput from "./src/components/StandardTextInput";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.js to p!</Text>
        <View style={styles.buttonContainer}>
          <StandardButton color={"#A7E821"} title={"My button"} size={"lg"} />
          <StandardTextInput placeholder={"name"} />
        </View>

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
});
