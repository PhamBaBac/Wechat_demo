import React,{useContext} from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { COLORS, ROUTES } from "../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { ContextApp } from "../../context/contextApp";
const Personal = ({ route }) => {
  const {theme } = useContext(ContextApp);
  const navigation = useNavigation();
  const { profiles } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.backgroundColor[0] }}>
      <View
        style={{
          height: 60,
          backgroundColor: theme.backgroundColor[2],
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        >
         <Ionicons name="ios-chevron-back" size={20} color={theme.color} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate(ROUTES.PERSONAL_SETTING, {uid: profiles.id})}>
          <Ionicons
            name="ellipsis-vertical"
            size={24}
            color={theme.color}
            style={{ marginRight: 10 }}
          />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.backgroundColor[1],
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
        <View style={{ marginLeft: 10, }}>
          <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20, color: theme.color }}>
            {profiles.userName}
          </Text>
          <Text style={{ fontSize: 18, color: theme.color }}>Wechat ID: {profiles.wechatId}</Text>
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
            <Text style={{ fontSize: 18, marginRight: 4, color: theme.color }}>+</Text>
            <Text style={{ fontSize: 18, color: theme.color }}>Trạng thái</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ROUTES.CHAT_SCREEN, {
            userName: profiles.userName,
            userImg: profiles.userImg,
          })
        }
        style={{
          marginTop: 6,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.backgroundColor[1],
          borderBottomWidth: 1,
          borderBottomColor: COLORS.grayLight,
          flexDirection: "row",
        }}
      >
        <Ionicons
          name="ios-chatbubbles-outline"
          size={24}
          color={theme.color}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 18, color: theme.color }}>Gửi tin nhắn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.backgroundColor[1],
          flexDirection: "row",
        }}
      >
        <Ionicons
          name="ios-videocam-outline"
          size={24}
          color={theme.color}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 18, color: theme.color }}>Cuộc gọi video và thoại</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Personal;
