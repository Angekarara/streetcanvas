import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed";
import Logo from "../Logo/Logo";
import StandardButton from "../StandardButton";

const Header = () => {
  return (
    <View style={styles.content}>
      <View style={{ width: 100 }}>
        <Logo width={111} height={30} />
      </View>
      <View>
        <StandardButton
          title="Sign Out"
          size="md"
          type="clear"
          titleStyle={{ color: "#A7E821" }}
          onPress={() => console.log("Logout...")}
          icon={<Icon name="arrow-left" color={"#A7E821"} size={24} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#000",
  },
});

export default Header;
