import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const DonationForm = () => {
  return (
    <ScrollView style={styles.content}>
      <View style={styles.container}>
        <Text style={styles.text}>{"Donation Form"}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});

export default DonationForm;
