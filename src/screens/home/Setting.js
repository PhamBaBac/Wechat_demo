import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { COLORS, IMGS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
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
    <ScrollView style={{ flex: 1, backgroundColor: theme.backgroundColor[0] }}>
      <Pressable
        onPress={() => navigation.navigate(ROUTES.RESET_PASS)}
        style={{
          height: 50,
          backgroundColor: theme.backgroundColor[1],
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, marginLeft: 10, color: theme.color }}>
          Mật khẩu
        </Text>
        <Ionicons style={{marginRight: 15}} name="ios-chevron-forward" size={20} color={theme.color} />
      </Pressable>
      <View
        style={[
          { backgroundColor: COLORS.white, marginTop: 6 },
          { backgroundColor: theme.backgroundColor[1] },
        ]}
      >
        <Pressable style={styles.TextSection}>
          <Text style={{ fontSize: 18, color: theme.color }}>
            Thông báo tin nhắn
          </Text>
          <Ionicons name="ios-chevron-forward" size={20} color={theme.color} />
        </Pressable>
        <Pressable style={styles.TextSection}>
          <Text style={{ fontSize: 18, color: theme.color }}>Trò chuyện</Text>
          <Ionicons name="ios-chevron-forward" size={20} color={theme.color} />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 15,
            backgroundColor: theme.backgroundColor[1],
          }}
        >
          <Pressable
            style={{ padding: 15, paddingLeft: 0, marginLeft: 10 }}
          >
            <Text style={{ fontSize: 18, color: theme.color }}>Chế độ tối</Text>
          </Pressable>
          <Switch
            trackColor={{ false: COLORS.gray, true: COLORS.blueLight }}
            value={darkMode}
            onValueChange={(value) => {
              setDarkMode(value);
              EventRegister.emit("changeTheme", value);
            }}
          />
        </View>
      </View>
      <Pressable
        style={{
          marginTop: 6,
          height: 50,
          backgroundColor: theme.backgroundColor[1],
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={handleLogout}
      >
        <Text style={{ fontSize: 18, marginLeft: 10, color: theme.color }}>
          Đăng xuất
        </Text>
      </Pressable>
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
    borderBottomColor: COLORS.grayLight,
  },
});
