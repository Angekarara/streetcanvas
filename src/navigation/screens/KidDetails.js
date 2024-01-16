import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import StandardButton from "../../components/StandardButton";
import screen from "../../utils/screen";

const KidDetails = ({ route, navigation }) => {
  const { kid, role } = route.params;

  return (
    <ScrollView style={styles.content}>
      <View style={styles.container}>
        <View style={[styles.avatar, styles.section]}>
          <Image
            source={require("../../../assets/kid.jpg")}
            style={styles.avatar}
          />
        </View>

        <View style={styles.section}>
          <Text style={[styles.text, styles.title]}>{kid.name}</Text>
          <Text style={[styles.text, styles.caption]}>{kid.age}</Text>
          <Text style={[styles.text, styles.caption]}>{kid.location}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>{kid.description}</Text>
        </View>

        {role === "Admin" ? (
          <View style={styles.section}>
            <StandardButton
              title="Remove"
              size="lg"
              type="solid"
              titleStyle={{ color: "#FFFFFF" }}
              onPress={() => console.log("Remove Kid...")}
              icon={null}
              color={"primary"}
              containerStyle={{ width: "50%" }}
            />
          </View>
        ) : role === "Donor" ? (
          <View style={[styles.section, styles.buttonsGroup]}>
            <StandardButton
              title="Adopt"
              size="lg"
              type="outline"
              titleStyle={{ color: "#A7E821" }}
              onPress={() => console.log("Adopt Kid...")}
              icon={null}
              containerStyle={{ width: "35%" }}
            />
            <StandardButton
              title="Donate"
              size="lg"
              type="solid"
              titleStyle={{ color: "#FFFFFF" }}
              onPress={() => navigation.navigate("Donation Form", { kid: kid })}
              icon={null}
              color={"primary"}
              containerStyle={{ width: "35%" }}
            />
          </View>
        ) : null}
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
    color: "#fff",
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
