import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import StandardButton from "../../components/StandardButton/StandardButton";
import theme from "../../theme";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const DonationForm = ({ route }) => {
  const { kid } = route.params;
  const [FullNames, setFullNames] = useState("");
  const [email, setEmail] = useState("");
  const [Location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const payload = {
        FullNames,
        email,
        Location,
        phoneNumber,
        kidId: kid._id
      }
      const response = await axios.post("https://donation-api-2yeu.onrender.com/donations/register", payload)

      console.log(response.data)
      alert("Donation made successfully")
      navigation.navigate("Admin Dashboard")
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
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
            value={FullNames}
            onChangeText={(e) => setFullNames(e)}
          />

          <Text style={styles.formText}>Email</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            keyboardType="email-address"
          />

          <Text style={styles.formText}>Phone Number</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={(e) => setPhoneNumber(e)}
            keyboardType="numeric"
          />

          <Text style={styles.formText}>Location</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter location"
            value={Location}
            onChangeText={(e) => setLocation(e)}
          />

          {
            loading ? (
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
            ) : (
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
            )
          }
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
