import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { COLORS, IMGS, ROUTES } from "../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { ContextApp } from "../../context/contextApp";

const Profile = () => {
  const navigation = useNavigation();
  const { accounts, theme, loggedInUser } = useContext(ContextApp);
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
          <Image
            source={IMGS.user}
            style={{
              height: 80,
              borderRadius: 10,
              width: 80
            }}
          />
        <View style={{ marginLeft: 14 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginBottom: 20,
              color: theme.color,
            }}
          >
            {loggedInUser.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{width: 220}}>
              <Text style={{ fontSize: 18, color: theme.color }}>
                Wechat ID: {loggedInUser.wechatId}
              </Text>
            </View>
            <View style={{ marginLeft: 10}}>
              <Ionicons name="ios-qr-code" size={18} color={theme.color} />
            </View>
            <Ionicons style={{marginLeft: 6}} name="ios-chevron-forward" size={20} color={theme.color} />
          </View>
          <Pressable
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
          </Pressable>
        </View>
      </View>
      <Pressable
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
        <Ionicons style={{marginRight: 16}} name="ios-chevron-forward" size={20} color={theme.color} />
      </Pressable>
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
          <Pressable style={styles.TextSection}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Mục ưa thích
            </Text>
            <Ionicons name="ios-chevron-forward" size={20} color={theme.color} />
          </Pressable>
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
          <Pressable style={styles.TextSection}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Bài Đăng của tôi
            </Text>
            <Ionicons name="ios-chevron-forward" size={20} color={theme.color} />
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={IMGS.card}
            style={{ width: 24, height: 24, marginLeft: 10 }}
          />
          <Pressable style={styles.TextSection}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Thẻ & Ưu đãi
            </Text>

            <Ionicons name="ios-chevron-forward" size={20} color={theme.color} />
          </Pressable>
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
          <Pressable
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
          </Pressable>
          <Ionicons name="ios-chevron-forward" size={20} color={theme.color} />
        </View>
      </View>

      <Pressable
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
        <Ionicons style={{marginRight: 16}} name="ios-chevron-forward" size={20} color={theme.color} />
      </Pressable>
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
