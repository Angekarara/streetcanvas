import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ListCard from "../../components/ListCard/ListCard";
import { Token } from "../../redux/Token";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";


const DonorDashboard = ({ navigation }) => {

  const [kids, setKids] = useState([]);
  const [length, setLength] = useState(0);
  const [user, setUser] = useState(null);
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

  useEffect(() => {
    const getAllSponsors = async () => {
      const response = await axios.get("https://donation-api-2yeu.onrender.com/users/length")
      setLength(response.data.data)
    }
    getAllSponsors()
  }, [])

 
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
  return (
    <View style={styles.container}>
       <View style={styles.section}>
          <View style={styles.metric}>
            <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
              <Text style={styles.metricNumberText}>Welcome back</Text>
              <Text style={styles.text}>{user && user.username}</Text>
            </View>
          </View>
        </View>
      <ScrollView>
          <View  style={[styles.section, styles.list]}>
            
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
                <Text style={styles.metricNumberText}>{length}</Text>
              </View>
              <View>
                <Text style={styles.metricNumberText}>Sponsors</Text>
              </View>
            </View>
          </View>


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
    color: "#A7E821",
    fontSize:20
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
