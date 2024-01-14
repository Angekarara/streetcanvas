import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider, Button } from "@rneui/themed";
import theme from "./src/Theme";
import StandardButton from "./src/components/StandardButton";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.js to p!</Text>
        <StandardButton color={"primary"} title={"Big"} />
        <StandardButton color={"secondary"} title={"Small"} />
        <StandardButton color={"#A7E821"} title={"Small"} size={"lg"} />
        <View style={styles.buttonContainer}>
          <StandardButton color={"#A7E821"} title={"My button"} size={"lg"} />
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
  },
});
