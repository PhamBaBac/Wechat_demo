import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { COLORS, IMGS, ROUTES } from "../../constants";
import QRCode from "react-native-qrcode-svg";
import { useNavigation } from "@react-navigation/native";

import { ContextApp } from "../../context/contextApp";

const Profile = () => {
  const navigation = useNavigation();
  const { users, setUsers } = useContext(ContextApp);
  const currentUser = users.length > 0 ? users[0] : null;

  const handleLogout = () => {
    const updatedUsers = users.slice(1);
    setUsers(updatedUsers);
    navigation.navigate("Login");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: COLORS.white,
          padding: 10,
        }}
      >
        <Image
          source={IMGS.human}
          style={{
            width: 80,
            height: 80,
            borderRadius: 15,
            backgroundColor: COLORS.black,
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>
            {currentUser ? currentUser.name : ""}
          </Text>
          <Text style={{ fontSize: 18 }}>
            Wechat ID: {currentUser ? currentUser.wechatId : ""}
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: 120,
              height: 30,
              borderColor: COLORS.grayLight,
              borderWidth: 1,
              borderRadius: 20,
              justifyContent: "center",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 18 }}>+</Text>
            <Text style={{ fontSize: 18 }}>Trạng thái</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: COLORS.white, marginTop: 10 }}>
        <TouchableOpacity
          style={styles.TextSection}
          onPress={() => {
            navigation.navigate(ROUTES.EDIT_PROFILE);
          }}
        >
          <Text style={{ fontSize: 18 }}>Edit Profile</Text>
        </TouchableOpacity>

        {currentUser && (
          <>
            {renderProfileItem(
              "Mã QR của tôi:",
              <QRCode
                value={`https://example.com/${currentUser.wechatId}`}
                size={25}
              />
            )}

            <TouchableOpacity style={styles.TextSection}>
              <Text style={{ fontSize: 18 }}>Cài đặt</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
        }}
        onPress={handleLogout}
      >
        <Text style={{ fontSize: 18 }}>Đăng xuất</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const renderProfileItem = (label, value) => (
  <View
    style={{
      padding: 15,
      paddingLeft: 0,
      marginLeft: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <Text style={{ fontSize: 18 }}>{label}</Text>
    <Text style={{ fontSize: 18 }}>{value}</Text>
  </View>
);

export default Profile;
const styles = StyleSheet.create({
  TextSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
