import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { COLORS, IMGS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

import { ContextApp } from "../../context/contextApp";
import { Switch } from "react-native";
import { EventRegister } from "react-native-event-listeners";
const Setting = () => {
  const navigation = useNavigation();
  const { theme } = useContext(ContextApp);
  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const [darkMode, setDarkMode] = useState(false);
  return (
    <ScrollView style={{ flex: 1, backgroundColor:  theme.backgroundColor[0] }}>
      <TouchableOpacity
      onPress={() => navigation.navigate(ROUTES.RESET_PASS)} 
        style={{
          height: 50,
          backgroundColor:  theme.backgroundColor[1],
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, marginLeft: 10, color: theme.color }}>Mật khẩu</Text>
        <Image
          source={IMGS.nextpage}
          style={{
            width: 18,
            height: 18,
            borderRadius: 15,
            marginRight: 15,
          }}
        />
      </TouchableOpacity>
      <View style={[{ backgroundColor: COLORS.white, marginTop: 6 },{ backgroundColor:  theme.backgroundColor[1]}]}>
        <TouchableOpacity style={styles.TextSection}>
          <Text style={{ fontSize: 18, color: theme.color }}>Thông báo tin nhắn</Text>
          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.TextSection}>
          <Text style={{ fontSize: 18, color: theme.color }}>Trò chuyện</Text>
          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 15,
            backgroundColor:  theme.backgroundColor[1]
          }}
        >
          <TouchableOpacity
            style={{ padding: 15, paddingLeft: 0, marginLeft: 10 }}
          >
            <Text style={{ fontSize: 18, color: theme.color }}>Chế độ tối</Text>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: COLORS.gray, true: COLORS.green }}
            value={darkMode}
            onValueChange={(value) => {
              setDarkMode(value);
              EventRegister.emit("changeTheme", value);
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 6,
          height: 50,
          backgroundColor:  theme.backgroundColor[1],
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={handleLogout}
      >
        <Text style={{ fontSize: 18, marginLeft: 10,color: theme.color }}>Đăng xuất</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Setting;
const styles = StyleSheet.create({
  TextSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
