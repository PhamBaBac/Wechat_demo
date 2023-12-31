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
  const { handleLogin} = useContext(ContextApp);
  const [phoneNumber, setPhoneNumber, ] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLoginPress = async () => {
    try {
      await handleLogin(phoneNumber, password);
      navigation.navigate(ROUTES.HOME);
    } catch (error) {
      setError("Số điện thoại hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.");
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
        <Pressable style={styles.button} onPress={handleLoginPress}>
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
