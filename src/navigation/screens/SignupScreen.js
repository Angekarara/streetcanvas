import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import StandardButton from "../../components/StandardButton/StandardButton";
import StandardTextInput from "../../components/StandardTextInput/StandardTextInput";
import theme from "../../theme/index";
import { Feather } from '@expo/vector-icons';
import axios from "axios";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState({ value: "" });
  const [password, setPassword] = useState({ value: "" });
  const [email, setEmail] = useState({ value: "" });
  const [phoneNumber, setPhoneNumber] = useState({ value: "" });
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const passwordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const onUsernameChange = (text) => {
    if (text !== "") {
      setUsername({ value: text });
    } else {
      setUsername({ value: text, message: "Write your Username" });
    }
  }
  const onEmailChange = (text) => {
    if (text !== "") {
      setEmail({ value: text });
    } else {
      setEmail({ value: text, message: "Write your valid email" });
    }
  }

  const onPhoneNumberChange = (text) => {
    if (text !== "") {
      setPhoneNumber({ value: text });
    } else {
      setPhoneNumber({ value: text, message: "Write your PhoneNumber" });
    }
  }

  const onPasswordChange = (text) => {
    if (text !== "") {
      setPassword({ value: text });
    } else {
      setPassword({ value: text, message: "Enter your Password" });
    }
  };


  const handleSignup = async (e) => {
    e.preventDefault();

    if (username.value == null || username.value == "") {
      setUsername({ message: "Write your username" })
    } else if (email.value == null || email.value == "" || !email.value.includes("@")) {
      setEmail({ message: "Write your valid email" })
    } else if (phoneNumber.value == null || phoneNumber.value == "") {
      setPhoneNumber({ message: "Write your PhoneNumber" })
    } else if (password.value == null || password.value == "") {
      setPassword({ message: "Enter your Password with" })
    } else {
      const payload = {
        username: username.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        password: password.value
      }
      setLoading(true)
      const response = await axios.post("https://donation-api-2yeu.onrender.com/users/register", payload,
        {
          "Content-Type": "application/json"
        })
      setLoading(false)
      Alert.alert("Signup Successfull")
      navigation.navigate("Login", response.data)

    }
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
            onChange={(e) => onUsernameChange(e)}
            placeholder="Username"
            value={username}
            inputStyle={{ color: "#FFFFFF" }}
          />
          <Text style={{ color: "red" }}>{username.message}</Text>
          <StandardTextInput
            onChange={(e) => onEmailChange(e)}
            placeholder="Email"
          />
          <Text style={{ color: "red" }}>{email.message}</Text>
          <StandardTextInput
            onChange={(e) => onPhoneNumberChange(e)}
            placeholder="Phone Number"
            keyboardType='numeric'
          />
          <Text style={{ color: "red" }}>{phoneNumber.message}</Text>
          <StandardTextInput
            onChange={(e) => onPasswordChange(e)}
            placeholder="Password"
            secureTextEntry={!showPassword}
          />
          <Text style={{ color: "red" }}>{password.message}</Text>
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={24} color="white"
            style={{ position: "absolute", right: 55, top: 300 }}
            onPress={passwordVisibility}
          />

          {/* <StandardTextInput
            onChange={(text) => setConfirmPassword(text)}
            placeholder="Confirm Password"
            value={confirmPassword}
            inputStyle={{ color: "#FFFFFF" }}
            secureTextEntry
          /> */}
        </View>


        {
          loading ? (
            <StandardButton
              color={theme.lightColors.mainGreen}
              title="loading..."
              size="lg"
              onPress={handleSignup}
              type="solid"
              titleStyle={{ color: "#000000" }}
              icon={null}
              containerStyle={{ width: "60%" }}
            />
          ) : (
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
          )

        }

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

        {/* <StandardButton
          color={theme.lightColors.mainGreen}
          title="Signup"
          size="lg"
          onPress={handleSignup}
          type="solid"
          titleStyle={{ color: theme.darkColors.mainBlack }}
          icon={null}
          containerStyle={{ width: "60%" }}
        /> */}
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
