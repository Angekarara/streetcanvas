import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ListCard from "../../components/ListCard/ListCard";
import { Token } from "../../redux/Token";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";


const data = [
  {
    id: 1,
    district: "Kicukiro",
    kids: 123,
    sponsors: 2,
  },
  {
    id: 2,
    district: "Gasabo",
    kids: 110,
    sponsors: 3,
  },
  {
    id: 3,
    district: "Huye",
    kids: 83,
    sponsors: 9,
  },
];

const kidsData = [
  {
    id: 1,
    name: "PIYERI",
    age: "12",
    location: "Kigali, Nyamirambo",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    id: 2,
    name: "PIYERI",
    age: "12",
    location: "Kigali, Kicukiro",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    id: 3,
    name: "PIYERI",
    age: "12",
    location: "Huye",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
];

const DonorDashboard = ({ navigation }) => {

  const [kids, setKids] = useState([]);
  const handleDetailsScreen = async(kid) => {
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
  },[])

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <View style={styles.metric}>
            <View style={styles.metricNumber}>
              <Text style={styles.metricNumberText}>1200</Text>
            </View>
            <View>
              <Text style={styles.metricNumberText}>Kids</Text>
              <Text style={styles.text}>Available</Text>
            </View>
          </View>
          <View style={styles.metric}>
            <View style={styles.metricNumber}>
              <Text style={styles.metricNumberText}>34</Text>
            </View>
            <View>
              <Text style={styles.metricNumberText}>Kids</Text>
              <Text style={styles.text}>In your location</Text>
            </View>
          </View>
        </View>

        {data.map((item) => (
          <View key={item.id} style={[styles.section, styles.list]}>
            <Text style={styles.text}>{item.id}.</Text>
            <View style={styles.metric}>
              <View style={styles.metricNumber}>
                <Text style={styles.metricNumberText}>{item.kids}</Text>
              </View>
              <View>
                <Text style={styles.metricNumberText}>Kids</Text>
                <Text style={styles.text}>{item.district}</Text>
              </View>
            </View>
            <View style={styles.metric}>
              <View style={styles.metricNumber}>
                <Text style={styles.metricNumberText}>{item.sponsors}</Text>
              </View>
              <View>
                <Text style={styles.metricNumberText}>Sponsors</Text>
                <Text style={styles.text}>{item.district}</Text>
              </View>
            </View>
          </View>
        ))}

        {kids.map((kid,index) => (
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

export default DonorDashboard;
