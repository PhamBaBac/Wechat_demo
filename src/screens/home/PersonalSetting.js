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

import { ContextApp } from "../../context/contextApp";
import { Switch } from "react-native";
import { EventRegister } from "react-native-event-listeners";
const PersonalSetting = () => {
  const { theme } = useContext(ContextApp);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.backgroundColor[0] }}>
      <View
        style={[
          { backgroundColor: COLORS.white },
          { backgroundColor: theme.backgroundColor[1] },
        ]}
      >
        <Pressable style={styles.TextSection}>
          <Text style={{ fontSize: 18, color: theme.color }}>
            Cài nhận xét và dán nhãn
          </Text>
          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
            }}
          />
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
          <Pressable style={{ padding: 12 }}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Quyền riêng tư
            </Text>
          </Pressable>
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
      <View
        style={[
          { backgroundColor: COLORS.white },
          { backgroundColor: theme.backgroundColor[1], marginVertical: 6 },
        ]}
      >
        <Pressable style={styles.TextSection}>
          <Text style={{ fontSize: 18, color: theme.color }}>
            Chia sẻ số liên lạc
          </Text>
          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
            }}
          />
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
          <Pressable style={{ padding: 12 }}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Thêm vào màn hình
            </Text>
          </Pressable>
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
      <Pressable
        style={{
          height: 50,
          backgroundColor: theme.backgroundColor[1],
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 18, marginLeft: 10, color: theme.color }}>
          Thêm sao
        </Text>
        <Switch
          style={{ marginRight: 20 }}
          trackColor={{ false: COLORS.gray, true: COLORS.blueLight }}
        />
      </Pressable>
      <View
        style={[
          { backgroundColor: COLORS.white },
          { backgroundColor: theme.backgroundColor[1], marginVertical: 6 },
        ]}
      >
        <Pressable style={styles.TextSection}>
          <Text style={{ fontSize: 18, color: theme.color }}>
            Chặn
          </Text>
          <Switch
            style={{ marginRight: 6 }}
            trackColor={{ false: COLORS.gray, true: COLORS.blueLight }}
          />
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
          <Pressable style={{ padding: 12 }}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Báo cáo
            </Text>
          </Pressable>
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
      <Pressable
        style={{
          height: 50,
          backgroundColor: theme.backgroundColor[1],
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 18, marginLeft: 10, color: theme.color }}>
          Xóa
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default PersonalSetting;
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
