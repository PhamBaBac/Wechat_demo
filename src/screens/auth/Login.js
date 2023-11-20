import React, { useState } from "react";
import {
  Text,
  TextInput,
  Pressable,
  View,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import { COLORS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([
    {
      name: "Nguyễn Văn A",
      wechatId: "nguyenvana",
      phone: "0123456789",
      pass: "123456",
    },
  ]);

  const handleLogin = () => {
    const user = users.find((user) => user.phone === phoneNumber);

    if (user) {
      if (user.pass === password) {
        navigation.navigate(ROUTES.HOME);
      } else {
        Alert.alert("Incorrect Password", "Please check your password");
      }
    } else {
      Alert.alert("User Not Found", "Please check your phone number");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          marginVertical: 80,
          fontSize: 18,
          color: COLORS.black,
        }}
      >
        Đăng nhập bằng số điện thoại
      </Text>
      <View style={{ flex: 3, marginTop: 20 }}>
        <View style={styles.input}>
          <Text style={styles.textName}>Điện thoại</Text>
          <TextInput
            style={{ marginRight: 40, fontSize: 18 }}
            placeholder="(+84) xxx xxx xxx"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.textName}>Mật khẩu</Text>
          <TextInput
            style={{ marginRight: 50, fontSize: 18, color: COLORS.gray }}
            placeholder="Nhập mật khẩu "
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <Pressable>
            <Text style={{ color: COLORS.blue }}>Quên mật khẩu</Text>
          </Pressable>
          <Text> | </Text>
          <Pressable>
            <Text style={{ color: COLORS.blue }}>Đăng ký</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  textName: {
    fontSize: 18,
    color: COLORS.black,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 44,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    marginHorizontal: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
    height: 40,
    width: 180,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.white,
  },
});
