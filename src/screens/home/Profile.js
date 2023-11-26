import React, { useContext} from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { COLORS, IMGS, ROUTES } from "../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { ContextApp } from "../../context/contextApp";

const Profile = () => {
  const navigation = useNavigation();
  const { accounts, theme } = useContext(ContextApp);
  const currentUser = accounts.length > 0 ? accounts[0] : null;
  const handleSetting = () => {
    navigation.navigate(ROUTES.SETTING);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.backgroundColor[0] }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.backgroundColor[1],
          padding: 10,
        }}
      >
        <View style={{ width: 80 }}>
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
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginBottom: 20,
              color: theme.color,
            }}
          >
            {currentUser ? currentUser.name : ""}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Wechat ID: {currentUser ? currentUser.wechatId : ""}
            </Text>
            <View style={{ marginLeft: 100 }}>
              <Ionicons name="ios-qr-code" size={18} color="black" />
            </View>
            <Image
              source={IMGS.nextpage}
              style={{
                width: 18,
                height: 18,
                borderRadius: 15,
                marginLeft: 6,
              }}
            />
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
            <Text style={{ fontSize: 18, color: theme.color }}>+</Text>
            <Text style={{ fontSize: 18, color: theme.color }}>Trạng thái</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 6,
          height: 50,
          backgroundColor: theme.backgroundColor[1],
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", paddingLeft: 10 }}>
          <Image source={IMGS.speech} style={{ width: 24, height: 24 }} />
          <Text style={{ fontSize: 18, marginLeft: 10, color: theme.color }}>
            Dịch vụ
          </Text>
        </View>

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
      <View style={{ backgroundColor: theme.backgroundColor[1], marginTop: 6 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={IMGS.box}
            style={{ width: 24, height: 24, marginLeft: 10 }}
          />
          <TouchableOpacity style={styles.TextSection}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Mục ưa thích
            </Text>
            <Image
              source={IMGS.nextpage}
              style={{
                width: 18,
                height: 18,
                borderRadius: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={IMGS.pic}
            style={{ width: 24, height: 24, marginLeft: 10 }}
          />
          <TouchableOpacity style={styles.TextSection}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Bài Đăng của tôi
            </Text>
            <Image
              source={IMGS.nextpage}
              style={{
                width: 18,
                height: 18,
                borderRadius: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={IMGS.card}
            style={{ width: 24, height: 24, marginLeft: 10 }}
          />
          <TouchableOpacity style={styles.TextSection}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Thẻ & Ưu đãi
            </Text>

            <Image
              source={IMGS.nextpage}
              style={{
                width: 18,
                height: 18,
                borderRadius: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 15,
            backgroundColor: theme.backgroundColor[1],
          }}
        >
          <TouchableOpacity
            style={{ padding: 15, paddingLeft: 0, marginLeft: 10 }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image source={IMGS.smile} style={{ width: 24, height: 24 }} />
              <Text
                style={{ fontSize: 18, marginLeft: 10, color: theme.color }}
              >
                Thư viện nhãn
              </Text>
            </View>
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
          backgroundColor: theme.backgroundColor[1],
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 10,
        }}
        onPress={handleSetting}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={IMGS.setting} style={{ width: 24, height: 24 }} />
          <Text style={{ fontSize: 18, marginLeft: 10, color: theme.color }}>
            Cài đặt
          </Text>
        </View>

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
    borderBottomColor: COLORS.grayLight,
  },
});
