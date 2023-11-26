import React, { useState, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { ROUTES, IMGS, COLORS } from "../constants";
import { Home, PhoneBook, Profile, discover } from "../screens";
import { ContextApp } from "../context/contextApp";
import Ionicons from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";

const Tab = createBottomTabNavigator();

function BottomTabNavigator({}) {
  const { setSearchText, theme } = useContext(ContextApp);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isAddVisible, setAddVisible] = useState(false);
  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };
  const handleAddClick = () => {
    setAddVisible(!isAddVisible);
  };
  const [modalTop, setModalTop] = useState(0);
  const onHeaderLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setModalTop(height);
  };

  return (
    <View  style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: theme.backgroundColor[2],
            height: 60,
          },
          tabBarActiveTintColor: COLORS.green,
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
          tabBarIconStyle: {
            marginTop: 8,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === ROUTES.HOME_CHAT) {
              iconName = focused
                ? "ios-chatbubbles"
                : "ios-chatbubbles-outline";
            } else if (route.name === ROUTES.PHONEBOOK) {
              iconName = focused ? "ios-people" : "ios-people-outline";
            } else if (route.name === ROUTES.PROFILE) {
              iconName = focused ? "ios-person" : "ios-person-outline";
            } else if (route.name === ROUTES.DISCOVER) {
              iconName = focused ? "ios-compass" : "ios-compass-outline";
            }

            return <Ionicons name={iconName} size={26} color={color} />;
          },
        })}
        tabBarOptions={{
          inactiveTintColor: theme.color,
        }}
      >
        <Tab.Screen
          name={ROUTES.HOME_CHAT}
          component={Home}
          options={{
            headerRight: () => (
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <Pressable onPress={handleSearchClick}>
                  <Ionicons name="ios-search" size={24} color="black" />
                </Pressable>
                <Pressable onPress={handleAddClick}>
                  <Ionicons
                    name="ios-add-circle"
                    size={24}
                    color="black"
                    style={{ marginHorizontal: 20 }}
                  />
                </Pressable>
              </View>
            ),
            headerTitleAlign: "center",
            headerTitle: () =>
              isSearchVisible ? (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TextInput
                    style={{
                      width: 200,
                      height: 30,
                      borderColor: theme.color[0],
                      borderWidth: 1,
                      borderRadius: 20,
                      paddingLeft: 10,
                      color: theme.color,
                      backgroundColor: theme.backgroundColor[1],
                    }}
                    onChangeText={(text) => setSearchText(text)}
                    placeholder="Search"
                  />
                </View>
              ) : (
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: theme.color,
                    }}
                  >
                    WeChat
                  </Text>
                </View>
              ),
            headerStyle: {
              backgroundColor: theme.backgroundColor[2],
            },
          }}
        />
        <Tab.Screen
          name={ROUTES.PHONEBOOK}
          component={PhoneBook}
          options={{
            headerRight: () => (
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <Pressable onPress={handleSearchClick}>
                  <Ionicons name="ios-search" size={24} color="black" />
                </Pressable>
                <Pressable onPress={handleAddClick}>
                  <Ionicons
                    name="ios-add-circle"
                    size={24}
                    color="black"
                    style={{ marginHorizontal: 20 }}
                  />
                </Pressable>
              </View>
            ),
            headerTitleAlign: "center",
            headerTitle: () =>
              isSearchVisible ? (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TextInput
                    style={{
                      width: 200,
                      height: 30,
                      borderColor: "gray",
                      borderWidth: 1,
                      borderRadius: 20,
                      paddingLeft: 10,
                      color: theme.color,
                      backgroundColor: theme.backgroundColor[1],
                    }}
                    onChangeText={(text) => setSearchText(text)}
                    placeholder="Search"
                  />
                </View>
              ) : (
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: theme.color,
                  }}
                >
                  Danh bạ
                </Text>
              ),
            headerStyle: {
              backgroundColor: theme.backgroundColor[2],
            },
          }}
        />

        <Tab.Screen
          name={ROUTES.DISCOVER}
          component={discover}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: theme.color,
                }}
              >
                Khám phá
              </Text>
            ),
            headerStyle: {
              backgroundColor: theme.backgroundColor[2],
            },
          }}
        />

        <Tab.Screen
          name={ROUTES.PROFILE}
          component={Profile}
          options={{
            headerShown: false,
            headerTitleAlign: "center",
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Tôi
              </Text>
            ),
            headerStyle: {
              backgroundColor: COLORS.gray,
            },
          }}
        />
      </Tab.Navigator>
      <Modal
        transparent={true}
        visible={isAddVisible}
        onRequestClose={() => setAddVisible(!isAddVisible)}
        onBackdropPress={() => setAddVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView} onLayout={onHeaderLayout}>
            <View
              style={{
                marginTop: 6,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  style={{ marginLeft: 10 }}
                  name="ios-chatbubbles"
                  size={24}
                  color="white"
                />
                <Pressable style={styles.TextSection}>
                  <Text style={{ fontSize: 18, color: COLORS.white }}>
                    Trò chuyện mới
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  style={{ marginLeft: 10 }}
                  name="ios-person-add"
                  size={24}
                  color="white"
                />
                <Pressable style={styles.TextSection}>
                  <Text style={{ fontSize: 18, color: COLORS.white }}>
                    Thêm số liên lạc
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: 15,
                }}
              >
                <Pressable
                  style={{ padding: 15, paddingLeft: 0, marginLeft: 10 }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons name="ios-qr-code" size={24} color="white" />
                    <Text
                      style={{
                        fontSize: 18,
                        marginLeft: 10,
                        color: COLORS.white,
                      }}
                    >
                      Quét
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default BottomTabNavigator;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 28,
    width: 180,
    position: "absolute",
    top: 0,
    right: -10,
  },
  modalView: {
    backgroundColor: COLORS.black,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    borderRadius: 30,
    padding: 10,
    elevation: 2,
    justifyContent: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  TextSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
});
