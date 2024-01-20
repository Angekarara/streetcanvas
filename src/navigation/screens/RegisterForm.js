import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import ImagePicker from "react-native-image-picker";
import StandardButton from "../../components/StandardButton/StandardButton";
import theme from "../../theme";

const RegisterForm = () => {
  const [location, setLocation] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = () => {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        setSelectedImage(response);
      }
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Location:", location);
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Selected Image:", selectedImage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.registerText}>Location</Text>
      <TextInput
        style={styles.registerInput}
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.registerText}>Full Name</Text>
      <TextInput
        style={styles.registerInput}
        placeholder="Enter full name"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.registerText}>Email</Text>
      <TextInput
        style={styles.registerInput}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.registerText}>Phone Number</Text>
      <TextInput
        style={styles.registerInput}
        placeholder="Enter phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      {/* 
      <TouchableOpacity onPress={handleImagePicker}>
        <Text>Choose Image</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={handleImagePicker}>
        <Text style={styles.chooseImageText}>Choose Image</Text>
      </TouchableOpacity>

      <StandardButton
        title="Register"
        size="lg"
        type="solid"
        titleStyle={{ color: theme.lightColors.mainTextColor }}
        onPress={() => console.log("registered")}
        icon={null}
        color={theme.lightColors.mainGreen}
        containerStyle={{
          width: "100%",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 24,
    color: "white",
  },
  registerInput: {
    borderWidth: 2,
    borderColor: "#A7E821",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginVertical: 16,
    color: "white",
  },
  registerText: {
    color: "white",
  },
  chooseImageText: {
    color: theme.lightColors.mainGreen,
    fontSize: 16,
    marginVertical: 8,
  },
});

export default RegisterForm;
