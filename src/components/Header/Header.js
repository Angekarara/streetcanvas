import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "@rneui/themed";
import Logo from "../Logo/Logo";
import StandardButton from "../StandardButton/StandardButton";
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import { setAuthLoaded, setAuthStatus, setAuthToken } from "../../redux/authReducer";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
 
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

  const [user, setUser] = useState(null);

  const getUser = async () => {
      try {
          let storedUser = await SecureStore.getItemAsync('user');
          return storedUser ? JSON.parse(storedUser) : null;
      } catch (error) {
          console.error('Error fetching user:', error);
          return null;
      }
  };

  useEffect(() => {
      const fetchData = async () => {
          const fetchedUser = await getUser();
          setUser(fetchedUser);
      };

      fetchData();
  }, []);

  const handlePress = () => {
    user.role === "admin" ?
      ( navigation.navigate("Admin Dashboard") )
      :( navigation.navigate("DonorDashboard"))
  };
  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={handlePress} style={{ width: 100 }}>
        <Logo width={111} height={30} />
      </TouchableOpacity>
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
