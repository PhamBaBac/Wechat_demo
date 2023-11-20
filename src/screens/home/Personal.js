import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, IMGS } from "../../constants";

const Personal = ({ route }) => {
  const { profile } = route.params;
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
            {profile.userName}
          </Text>
          <Text style={{ fontSize: 18 }}>Wechat ID: {profile.wechatId}</Text>
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
          marginTop: 20,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
        }}
      >
        <Text style={{ fontSize: 18 }}>Gửi tin nhắn</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Personal;
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
