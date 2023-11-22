import React, { useContext,useState } from "react";
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
  const { accounts, theme} = useContext(ContextApp);
  const [darkMode, setDarkMode] = useState(false);
  const currentUser = accounts.length > 0 ? accounts[0] : null;

  const handleLogout = () => {
    navigation.navigate(ROUTES.SETTING);
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
        <View style={{width: 80}}>
          <Image
            source={IMGS.user}
            style={{
              height: 80,
              borderRadius: 10,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={{ marginLeft: 14 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>
            {currentUser ? currentUser.name : ""}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 18 }}>
              Wechat ID: {currentUser ? currentUser.wechatId : ""}
            </Text>
            <View style={{ marginLeft: 60 }}>
              <QRCode
                value={currentUser ? currentUser.phone : ""}
                size={18}
                color="black"
                backgroundColor="white"
              />
            </View>
          </View>
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
      <TouchableOpacity
        style={{
          marginTop: 6,
          height: 50,
          backgroundColor: COLORS.white,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onPress={handleLogout}
      >
        <Text style={{ fontSize: 18, marginLeft: 10 }}>Dịch vụ</Text>
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
      <View style={{ backgroundColor: COLORS.white, marginTop: 6 }}>
        <TouchableOpacity style={styles.TextSection}>
          <Text style={{ fontSize: 18 }}>Mục ưa thích</Text>
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
          <Text style={{ fontSize: 18 }}>Bài Đăng của tôi</Text>
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
          <Text style={{ fontSize: 18 }}>Thẻ & Ưu đãi</Text>
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
          }}
        >
          <TouchableOpacity
            style={{ padding: 15, paddingLeft: 0, marginLeft: 10 }}
          >
            <Text style={{ fontSize: 18 }}>Thư viện nhãn</Text>
          </TouchableOpacity>
          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 6,
          height: 50,
          backgroundColor: COLORS.white,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onPress={handleLogout}
      >
        <Text style={{ fontSize: 18, marginLeft: 10 }}>Cài đặt</Text>
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
    </ScrollView>
  );
};

export default Profile;
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
