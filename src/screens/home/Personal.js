import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS,ROUTES } from "../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const Personal = ({ route }) => {
  const navigation = useNavigation();
  const { profiles } = route.params;
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
          source={profiles.userImg}
          style={{
            width: 80,
            height: 80,
            borderRadius: 15,
            backgroundColor: COLORS.black,
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>
            {profiles.userName}
          </Text>
          <Text style={{ fontSize: 18 }}>Wechat ID: {profiles.wechatId}</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: 120,
              height: 30,
              borderColor: COLORS.grayLight,
              borderWidth: 1,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 18, marginRight: 4 }}>+</Text>
            <Text style={{ fontSize: 18 }}>Trạng thái</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
      onPress={() => navigation.navigate(ROUTES.CHAT_SCREEN,{userName: profiles.userName, userImg: profiles.userImg})}
        style={{
          marginTop: 6,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.grayLight,
          flexDirection: "row",
        }}
      >
       <Ionicons name="ios-chatbubbles-outline" size={24} color={COLORS.black} style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18 }}>Gửi tin nhắn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
          flexDirection: "row",
        }}
      >
        <Ionicons name="ios-videocam-outline" size={24} color={COLORS.black} style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18 }}>Cuộc gọi video và thoại</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Personal;
