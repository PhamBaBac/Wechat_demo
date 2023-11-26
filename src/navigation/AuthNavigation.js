import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Default,
  Login,
  ChatScreen,
  PersonalChat,
  RegisterScreen,
  ForgotPasswordScreen,
  Setting,
  ResetPass,
} from "../screens/index";
import { COLORS, ROUTES, IMGS } from "../constants";
import BottomTabNaVigator from "./BottomTabNaVigator";
import { Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ContextApp } from "../context/contextApp";

const Stack = createStackNavigator();

function AuthNavigation() {
  const navigation = useNavigation();
  const { theme } = useContext(ContextApp);
  return (
    <Stack.Navigator initialRouteName={ROUTES.DEFAULT}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.gray,
          },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Image source={IMGS.backpage} style={{ width: 20, height: 20 }} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.DEFAULT}
        component={Default}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={BottomTabNaVigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={ROUTES.CHAT_SCREEN}
        component={ChatScreen}
        
        options={({ route }) => ({
          title: route.params.userName,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.gray,
          },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Image source={IMGS.backpage} style={{ width: 20, height: 20 }} />
            </Pressable>
          ),
        })}
        
      />
      <Stack.Screen
        name={ROUTES.PERSONAL_CHAT}
        component={PersonalChat}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.gray,
          },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Image source={IMGS.backpage} style={{ width: 20, height: 20 }} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={RegisterScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: theme.backgroundColor[2],
          },
          headerTintColor: theme.color,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Image source={IMGS.backpage} style={{ width: 20, height: 20 }} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={ROUTES.SETTING}
        component={Setting}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: theme.backgroundColor[2],
          },
          headerTintColor: theme.color,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Image source={IMGS.backpage} style={{ width: 20, height: 20 }} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.RESET_PASS}
        component={ResetPass}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: theme.backgroundColor[1],
            color: theme.color,
          },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Image source={IMGS.backpage} style={{ width: 20, height: 20 }} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default AuthNavigation;
