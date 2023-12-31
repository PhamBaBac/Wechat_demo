import React, { useContext } from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { COLORS,ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { ContextApp } from "../../context/contextApp";
import Icon from "react-native-vector-icons/Ionicons";
const PhoneBook = () => {
  const navigation = useNavigation();
  const { userProfiles, searchText,theme} = useContext(ContextApp);
  const filteredData = userProfiles.filter(
    (item) =>
      item.userName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchText.toLowerCase())
  );

  const groupedData = filteredData.reduce((acc, profile) => {
    const firstLetter = profile.userName.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(profile);
    return acc;
  }, {});

  const handleUserPress = (selectedProfile) => {
    navigation.navigate(ROUTES.PERSONAL_CHAT, { profiles: selectedProfile });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor[0],
      }}
    >
      <ScrollView>
        <View style={{ backgroundColor: theme.backgroundColor[1] }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.orange,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
                borderRadius: 5,
                marginTop: 4,
              }}
            >
              <Icon name="ios-people" size={24} color="white" />
            </View>
            <Pressable style={styles.TextSection}>
              <Text style={{ fontSize: 18, color: theme.color }}>
                Bạn bè mới
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.green,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
                borderRadius: 5,
              }}
            >
              <Icon name="ios-chatbubbles" size={24} color="white" />
            </View>
            <Pressable style={styles.TextSection}>
              <Text style={{ fontSize: 18, color: theme.color }}>
                Trò chuyện nhóm
              </Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.blueLight,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
                borderRadius: 5,
              }}
            >
              <Icon name="ios-pricetag" size={24} color="white" />
            </View>
            <Pressable style={styles.TextSection}>
              <Text style={{ fontSize: 18, color: theme.color }}>Nhãn</Text>
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
            <View style={{ marginVertical: 6, marginLeft: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: COLORS.blueLight,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                  }}
                >
                  <Icon name="ios-checkmark-circle" size={24} color="white" />
                </View>
                <Pressable>
                  <Text
                    style={{ fontSize: 18, marginLeft: 10, color: theme.color }}
                  >
                    Tài khoản chính thức
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        {Object.entries(groupedData)
          .sort(([letter1], [letter2]) => letter1.localeCompare(letter2))
          .map(([letter, profiles]) => (
            <View
              key={letter}
              style={{
                backgroundColor: theme.backgroundColor[0],
                borderBottomColor: COLORS.black,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 10,
                  color: theme.color,
                  marginVertical: 8,
                }}
              >
                {letter}
              </Text>
              <FlatList
                style={{ backgroundColor: theme.backgroundColor[0] }}
                data={profiles}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => handleUserPress(item)}
                    style={{
                      height: 54,
                      backgroundColor: theme.backgroundColor[1],
                      alignItems: "center",
                      flexDirection: "row",
                      paddingLeft: 10,
                    }}
                  >
                    <Image
                      source={item.userImg}
                      style={{ width: 40, height: 40 }}
                    />
                    <Text style={styles.TextSection}>
                      <Text style={{ fontSize: 18, color: theme.color }}>
                        {item.userName}
                      </Text>
                    </Text>
                  </Pressable>
                )}
              />
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default PhoneBook;
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
