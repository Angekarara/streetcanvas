import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import StandardButton from "../../components/StandardButton/StandardButton";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";

const RegisterForm = () => {
  const [Location, setLocation] = useState("");
  const [FullNames, setFullNames] = useState("");
  const [dascription, setDascription] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  const  navigation = useNavigation()
  const handleFileChange = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
   
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };
 
  const handleSubmit = async () => {
    console.log("photo", photo)
    const formData = new FormData();
    formData.append("Location", Location);
    formData.append("FullNames", FullNames);
    formData.append("dascription", dascription);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("phoneNumber", phoneNumber);

    if (photo) {
      const localUri = photo;
      const filename = localUri.split("/").pop();
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      formData.append("photo", {
        uri: localUri,
        name: new Date() + '_photo',
        type: type,
      });
    };
    try {
      setLoading(true)
      console.log(formData)
      const response  = await axios.post("https://donation-api-2yeu.onrender.com/kids/register", 
        formData,
        {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      })
      consolelog(response)
      alert("Kid registered successfully")
      navigation.navigate("Admin Dashboard")
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={handleFileChange}>
        {photo ? (
          <Image
            style={styles.image}
            source={{
              uri: photo,
            }}
          />
        ) : (
          <>

            <Image
              style={styles.image}
              source={{
                uri: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
              }}
            />
            <Text style={styles.Text}>Click to upload</Text>
          </>
        )}
      </TouchableOpacity>
      <Text style={styles.registerText}>Location</Text>
      <TextInput
        style={styles.registerInput}
        placeholder="Enter location"
        value={Location}
        onChangeText={(text) => setLocation(text)}
      />

      <Text style={styles.registerText}>Full Name</Text>
      <TextInput
        style={styles.registerInput}
        placeholder="Enter full name"
        value={FullNames}
        onChangeText={(text) => setFullNames(text)}
      />

      <Text style={styles.registerText}>Date Of Birth</Text>
      <TextInput
        style={styles.registerInput}
        placeholder="Enter email"
        value={dateOfBirth}
        onChangeText={(text) => setDateOfBirth(text)}
       
      />

      <Text style={styles.registerText}>Phone Number</Text>
      <TextInput
        style={styles.registerInput}
        placeholder="Enter phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <Text style={styles.registerText}>Description</Text>
      <TextInput
        style={styles.registerInput}
        placeholder="Enter email"
        value={dascription}
        onChangeText={(text) => setDascription(text)}
      />

     {loading ?
           <StandardButton
           title="Loading..."
           size="lg"
           type="solid"
           titleStyle={{ color: theme.lightColors.mainTextColor }}
           onPress={handleSubmit}
           icon={null}
           color={theme.lightColors.mainGreen}
           containerStyle={{
             width: "100%",
           }}
         />
         :
         <StandardButton
         title="Register"
         size="lg"
         type="solid"
         titleStyle={{ color: theme.lightColors.mainTextColor }}
         onPress={handleSubmit}
         icon={null}
         color={theme.lightColors.mainGreen}
         containerStyle={{
           width: "100%",
         }}
       />

     }
    </ScrollView>
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
  Text: {
    color: "white",
    fontSize: 16,
    alignSelf: 'center'
  },
  registerText: {
    color: "white",
  },
  chooseImageText: {
    color: theme.lightColors.mainGreen,
    fontSize: 16,
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: 'center'
  },
});

export default RegisterForm;
