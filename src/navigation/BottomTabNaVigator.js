import React, { useState, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { ROUTES, IMGS, COLORS } from "../constants";
import { Home, PhoneBook, Profile, discover } from "../screens";
import { Image, View, Text, Pressable, TextInput } from "react-native";

import { ContextApp } from "../context/contextApp";

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
        },
        tabBarActiveTintColor: COLORS.green,
        tabBarIcon: ({ focused, color, size }) => {
          let iconImage;

          if (route.name === ROUTES.HOME_CHAT) {
            iconImage = focused ? IMGS.chat : IMGS.chat;
          } else if (route.name === ROUTES.PHONEBOOK) {
            iconImage = focused ? IMGS.phoneBook : IMGS.phoneBook;
          } else if (route.name === ROUTES.PROFILE) {
            iconImage = focused ? IMGS.profile : IMGS.profile;
          } else if (route.name === ROUTES.DISCOVER) {
            iconImage = focused ? IMGS.compass : IMGS.compass;
          }

          return (
            <Image
              source={iconImage}
              style={{ width: size, height: size, tintColor: color }}
            />
          );
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
                <Image
                  source={IMGS.search}
                  style={{ width: 20, height: 20, resizeMode: "contain" }}
                />
              </Pressable>
              <Pressable>
                <Image
                  source={IMGS.add}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    marginHorizontal: 20,
                  }}
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
                <Image source={IMGS.search} style={{ width: 20, height: 20 }} />
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate(ROUTES.ADD_PHONEBOOK);
                  handleAddContact(newContact);
                }}
              >
                <Image
                  source={IMGS.add}
                  style={{
                    width: 20,
                    height: 20,
                    marginHorizontal: 20,
                  }}
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
