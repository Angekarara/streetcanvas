import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import StandardButton from "../../components/StandardButton/StandardButton";
import ListCard from "../../components/ListCard/ListCard";
import theme from "../../theme";
import { useEffect } from "react";
import axios from "axios";
import { TouchableOpacity } from "react-native";

const AdminDashboard = ({ navigation }) => {
  const [kids, setKids] = useState([]);
  const [length, setLength] = useState(0);
  const handleDetailsScreen = async (kid) => {
    const res = await axios.get(`https://donation-api-2yeu.onrender.com/kids/single/${kid._id}`)

    navigation.navigate("Kid Details", { kid: res.data.kid, role: "Admin" });
  };
  useEffect(() => {

  }, []);
  useEffect(() => {
    const getAllKids = async () => {
      const response = await axios.get("https://donation-api-2yeu.onrender.com/kids/all")
      setKids(response.data.kids)
    }
    getAllKids()
  }, [kids])

  const handleRegisterKid = () => {
    navigation.navigate("Register Form");
  }

  useEffect(() => {
    const getAllSponsors = async () => {
      const response = await axios.get("https://donation-api-2yeu.onrender.com/users/length")
      setLength(response.data.data)
    }
    getAllSponsors()
  }, [])

 
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.section}>

          <View style={styles.metric}>
            <TouchableOpacity onPress={() => navigation.navigate("DonationList")} style={styles.list}>
              <Text style={styles.metricNumberText}>Donation List</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <StandardButton
            title="Register New Kid"
            size="lg"
            type="solid"
            titleStyle={{ color: theme.lightColors.mainTextColor }}
            onPress={() => handleRegisterKid()}
            icon={null}
            color={theme.lightColors.mainGreen}
            containerStyle={{
              width: "100%",
            }}
          />
        </View>


        <View style={[styles.section, styles.list]}>
          <View style={styles.metric}>
            <View style={styles.metricNumber}>
              <Text style={styles.metricNumberText}>{kids.length}</Text>
            </View>
            <View>
              <Text style={styles.metricNumberText}>Kids</Text>
            </View>
          </View>
          <View style={styles.metric}>
            <View style={styles.metricNumber}>
              <Text style={styles.metricNumberText}>{length }</Text>
            </View>
            <View>
              <Text style={styles.metricNumberText}>Sponsors</Text>
            </View>
          </View>
        </View>


        {kids.map((kid, index) => (
          <ListCard
            key={index}
            kid={kid}
            onPress={() => handleDetailsScreen(kid)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 24,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  metric: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  metricNumber: {
    width: 54,
    height: 54,
    borderRadius: 54 / 2,
    borderWidth: 2,
    borderColor: "#A7E821",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  metricNumberText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  list: {
    borderWidth: 0.5,
    borderRadius: 12,
    borderColor: "#A7E821",
    paddingHorizontal: 6,
    paddingVertical: 12,
  },
});

export default AdminDashboard;
