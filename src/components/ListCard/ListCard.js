import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ListCard = ({ kid, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.section}
      onPress={onPress}
    >
      <View style={styles.avatarContainer}>
        <Image
          source={{uri: kid.photo}}
          style={styles.avatar}
        />
      </View>

      <View style={styles.descriptionContainer} >
        <Text style={styles.title}>{`${kid.FullNames}, ${kid.Location}`}</Text>
        <Text style={styles.text}>{kid.dateOfBirth}</Text>
        <Text style={styles.text}>{kid.phoneNumber}</Text>
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    padding: 12,
    borderWidth: 0.5,
    borderRadius: 12,
    borderColor: "#A7E821",
    overflow: "hidden",
   
  },
  avatarContainer: {
    marginRight: 12,
    width: 80,
  },
  avatar: {
    width: "auto",
    height: 80,
    borderRadius: 80 / 2,
  },
  text: {
    color: "#fff",
    overflow: "hidden",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  descriptionContainer: {
    marginRight: 12,
  },
});

export default ListCard;
