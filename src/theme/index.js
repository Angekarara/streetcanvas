import { createTheme } from "@rneui/themed";

const theme = createTheme({
  lightColors: {
    mainGreen: "#A7E821",
    mainTextColor: "#FFFFFF",
  },
  darkColors: {
    mainGray: "#8C8C8C",
    mainBlack: "#000000",
    darkGray: "#121110",
  },
  components: {
    Button: {
      width: "100%",
      margin: 50,
      borderRadius: 10,
      alignItems: "center",
      backgroundColor: "#A7E821",
    },
    Input: {
      width: 21,
    },
  },
});

export default theme;
