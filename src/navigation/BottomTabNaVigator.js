import React, { useState, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { ROUTES, IMGS, COLORS } from "../constants";
import { Home, PhoneBook, Profile } from "../screens";
import { Image, View, Text, Pressable, TextInput } from "react-native";

import { ContextApp } from "../context/contextApp";

const Tab = createBottomTabNavigator();

function BottomTabNavigator({ }) {
  const navigation = useNavigation();
  const { setSearchText } = useContext(ContextApp);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.green,
        tabBarIcon: ({ focused, color, size }) => {
          let iconImage;

          if (route.name === ROUTES.HOME_CHAT) {
            iconImage = focused ? IMGS.chat : IMGS.chat;
          } else if (route.name === ROUTES.PHONEBOOK) {
            iconImage = focused ? IMGS.phoneBook : IMGS.phoneBook;
          } else if (route.name === ROUTES.PROFILE) {
            iconImage = focused ? IMGS.profile : IMGS.profile;
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
        inactiveTintColor: "#000",
        activeBackgroundColor: COLORS.gray,
        inactiveBackgroundColor: COLORS.gray,
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
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
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
                  }}
                >
                  WeChat
                </Text>
              </View>
            ),
          headerStyle: {
            backgroundColor: COLORS.gray,
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
                }}
              >
                Danh bạ
              </Text>
            ),
          headerStyle: {
            backgroundColor: COLORS.gray,
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
