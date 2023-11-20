import React, { useContext } from "react";
import {
  SafeAreaView,
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
  const { users,setUsers } = useContext(ContextApp);
  const currentUser = users.length > 0 ? users[0] : null;
  
  const handleLogout = () => {
    const updatedUsers = users.slice(1);
    setUsers(updatedUsers);
    navigation.navigate("Login");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flexDirection: "row", margin: 10, alignItems: "center" }}>
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
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            {currentUser ? currentUser.name : ""}
          </Text>
          <Text style={{ fontSize: 18 }}>
            Wechat ID: {currentUser ? currentUser.wechatId : ""}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: 200,
          height: 40,
          backgroundColor: COLORS.grayLight,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 15,
          marginVertical: 15,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600" }}>+</Text>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Trạng thái</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderColor: COLORS.lightGray,
          borderTopWidth: 1,
        }}
        onPress={() => {
          navigation.navigate(ROUTES.EDIT_PROFILE);
        }}
      >
        <Text style={{ fontSize: 18 }}>Edit Profile</Text>
      </TouchableOpacity>

      {currentUser && (
        <>
          {renderProfileItem("Tên:", currentUser.name)}
          {renderProfileItem("Wechat ID:", currentUser.wechatId)}
          {renderProfileItem(
            "Mã QR của tôi:",
            <QRCode
              value={`https://example.com/${currentUser.wechatId}`}
              size={25}
            />
          )}

          <TouchableOpacity
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderColor: COLORS.lightGray,
            }}
          >
            <Text style={{ fontSize: 18 }}>Cài đặt</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderColor: COLORS.lightGray,
            }}
            onPress={handleLogout}
          >
            <Text style={{ fontSize: 18 }}>Đăng xuất</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

const renderProfileItem = (label, value) => (
  <View
    style={{
      padding: 20,
      borderBottomWidth: 1,
      borderColor: COLORS.lightGray,
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <Text style={{ fontSize: 18 }}>{label}</Text>
    <Text style={{ fontSize: 18 }}>{value}</Text>
  </View>
);

export default Profile;
