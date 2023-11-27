import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  Pressable,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { COLORS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { ContextApp } from "../../context/contextApp";

const Login = () => {
  const navigation = useNavigation();
  const { accounts, setAccounts, them } = useContext(ContextApp);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async  () => {
    try {
      // const account = accounts.find((user) => user.phone === phoneNumber);
      // if (account) {
      //   if (account.password === password) {
      //     setAccounts([account,...accounts]);
      //     navigation.navigate(ROUTES.HOME);
      //   } else {
      //     setError("Mật khẩu không đúng. Vui lòng kiểm tra lại");
      //   }
      // } else {
      //   setError("Người dùng không tồn tại. Vui lòng kiểm tra lại số điện thoại");
      // }
      navigation.navigate(ROUTES.HOME);
    } catch (error) {
      setError("Đã xảy ra lỗi khi đăng nhập");
      console.error("Error during login:", error);
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
            style={{ padding: 8, fontSize: 18, color: COLORS.black }}
            placeholder="Nhập số điện thoại"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.textName}>Mật khẩu</Text>
          <TextInput
            style={{ padding: 8, fontSize: 18, color: COLORS.black }}
            placeholder="Nhập mật khẩu "
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View>
          <Text style={styles.error}>{error}</Text>
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
          <Pressable onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}>
            <Text style={{ color: COLORS.blue }}>Quên mật khẩu</Text>
          </Pressable>
          <Text> | </Text>
          <Pressable onPress={() => navigation.navigate(ROUTES.REGISTER)}>
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
    width: 100,
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.green,
    height: 40,
    width: 180,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.white,
  },
  error: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.red,
  },
});
