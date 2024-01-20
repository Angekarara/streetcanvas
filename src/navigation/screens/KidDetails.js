import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import StandardButton from "../../components/StandardButton/StandardButton";
import screen from "../../utils/screen";
import theme from "../../theme";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";

const KidDetails = ({ route, navigation }) => {
  const { kid } = route.params;
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      let user = await SecureStore.getItemAsync("user");
      // console.log(user);
      return JSON.parse(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      setUser(user);

    };

    fetchData();
  }, []);

  const deleteKid = async() =>{
    try {
       await axios.delete(`https://donation-api-2yeu.onrender.com/kids/delete/${kid._id}`)
      alert("Kid removed successfully")
      navigation.navigate("Admin Dashboard")
    }catch(error){
      console.log(error)  
    }
  }
 
  return (
    <ScrollView style={styles.content}>
      <View style={styles.container}>
        <View style={[styles.avatar, styles.section]}>
          <Image
            source={{ uri: kid.photo }}
            style={styles.avatar}
          />
        </View>

        <View style={styles.section}>
          <Text style={[styles.text, styles.title]}>{kid.FullNames}</Text>
          <Text style={[styles.text, styles.caption]}>{kid.dateOfBirth}</Text>
          <Text style={[styles.text, styles.caption]}>{kid.Location}</Text>
          <Text style={[styles.text, styles.caption]}>{kid.phoneNumber}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>{kid.dascription}</Text>
        </View>

        {user && user.role === "admin" ? (
          <View style={styles.section}>
            <StandardButton
              title="Remove"
              size="lg"
              type="solid"
              titleStyle={{ color: theme.lightColors.mainTextColor }}
              onPress={deleteKid}
              icon={null}
              color={theme.lightColors.mainGreen}
              containerStyle={{ width: "50%" }}
            />
          </View>
        ) : (
          <View style={[styles.section, styles.buttonsGroup]}>
            <StandardButton
              title="Adopt"
              size="lg"
              type="outline"
              titleStyle={{ color: theme.lightColors.mainGreen }}
              onPress={() => console.log("Adopt Kid...")}
              icon={null}
              containerStyle={{
                width: "35%",
                borderColor: theme.lightColors.mainGreen,
              }}
            />
            <StandardButton
              title="Donate"
              size="lg"
              type="solid"
              titleStyle={{ color: theme.lightColors.mainTextColor }}
              onPress={() => navigation.navigate("DonationForm", { kid: kid })}
              icon={null}
              color={"mainGreen"}
              containerStyle={{ width: "35%" }}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: theme.darkColors.mainBlack,
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    marginBottom: 24,
  },
  buttonsGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  avatar: {
    height: screen.width / 2,
    width: screen.width / 2,
    borderRadius: screen.width / 2 / 2,
    marginBottom: 24,
  },
  text: {
    color: theme.lightColors.mainTextColor,
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  caption: {
    fontSize: 16,
  },
});

export default KidDetails;
