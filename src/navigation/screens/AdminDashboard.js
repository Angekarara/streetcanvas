import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import StandardButton from "../../components/StandardButton";
import ListCard from "../../components/ListCard/ListCard";

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
    title: "PIYERI, 12 y",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    id: 2,
    title: "PIYERI, 12 y",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    id: 3,
    title: "PIYERI, 12 y",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
];

const AdminDashboard = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <View style={styles.metric}>
            <View style={styles.metricNumber}>
              <Text style={styles.metricNumberText}>45</Text>
            </View>
            <View>
              <Text style={styles.metricNumberText}>Kids</Text>
              <Text style={styles.text}>In your location</Text>
            </View>
          </View>
          <View style={styles.metric}>
            <View style={styles.metricNumber}>
              <Text style={styles.metricNumberText}>34</Text>
            </View>
            <View>
              <Text style={styles.metricNumberText}>Donation</Text>
              <Text style={styles.text}>In your location</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <StandardButton
            title="Register New Kid"
            size="lg"
            type="solid"
            titleStyle={{ color: "#FFFFFF" }}
            onPress={() => console.log("Register Kid...")}
            icon={null}
            color={"primary"}
            containerStyle={{ width: "100%" }}
          />
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

        {kidsData.map((kid) => (
          <ListCard
            key={kid.id}
            title={kid.title}
            description={kid.description}
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
    paddingVertical: 24,
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