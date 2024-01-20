import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed";
import { AuthContext } from "../../context/AuthProvider";
import Logo from "../Logo/Logo";
import StandardButton from "../StandardButton/StandardButton";
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import { setAuthLoaded, setAuthStatus, setAuthToken } from "../../redux/authReducer";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('token')
      await SecureStore.deleteItemAsync('user')
      dispatch(setAuthToken(null));
      dispatch(setAuthStatus(false));
      dispatch(setAuthLoaded(true));
      navigation.navigate("Login");
    } catch (error) {
      console.log(error)
    }
  };

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
          onPress={handleLogout}
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
