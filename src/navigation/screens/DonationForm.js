import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import StandardButton from "../../components/StandardButton/StandardButton";
import theme from "../../theme";

const DonationForm = () => {
  const [fullNames, setFullNames] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    // Handle donation submission logic here
    console.log("Full Names:", fullNames);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Location:", location);
  };
  return (
    <ScrollView style={styles.content}>
      <View style={styles.container}>
        <Text style={styles.text}>{"Donation form"}</Text>
        <View style={styles.container}>
          <Text style={styles.formText}>Full Names</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter full names"
            value={fullNames}
            onChangeText={setFullNames}
          />

          <Text style={styles.formText}>Email</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.formText}>Phone Number</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />

          <Text style={styles.formText}>Location</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter location"
            value={location}
            onChangeText={setLocation}
          />

          <StandardButton
            title="Donate"
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
        </View>
      </View>
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
  formInput: {
    borderWidth: 2,
    borderColor: "#A7E821",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginVertical: 16,
    color: "white",
  },
  formText: {
    color: "white",
  },
});

export default DonationForm;
// };

// const styles = StyleSheet.create({
//   content: {
//     flex: 1,
//     backgroundColor: "#000",
//   },
//   container: {
//     flex: 1,
//     padding: 24,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "#fff",
//     textAlign: "center",
//   },
// });

// export default DonationForm;
