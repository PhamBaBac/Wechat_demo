import React, { useState, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { ROUTES, IMGS, COLORS } from "../constants";
import { Home, PhoneBook, Profile, discover } from "../screens";
import { Image, View, Text, Pressable, TextInput } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons';
import { ContextApp } from "../context/contextApp";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

function BottomTabNavigator({}) {
  const navigation = useNavigation();
  const { setSearchText, theme } = useContext(ContextApp);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };
  return (
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
            iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles-outline";
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
              <Pressable>
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
                    borderColor: theme.color,
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
                    color: theme.color,
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
                <Ionicons  name="ios-search" size={24} color="black" />
              </Pressable>
              <Pressable>
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
                    borderRadius: 5,
                    paddingLeft: 10,
                    color: theme.color,
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
  );
}

export default BottomTabNavigator;
