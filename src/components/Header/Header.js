import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed";
import screen from "../../utils/screen";
import Logo from "../Logo/Logo";
import StandardButton from "../StandardButton";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ width: 100 }}>
          <Logo width={"100%"} height={100} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screen.headerHeight,
    backgroundColor: "#000",
    flex: 1,
  },
  content: {
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
});

export default Header;
