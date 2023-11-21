import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  Pressable,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { COLORS, IMGS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { ContextApp } from "../../context/contextApp";
const RegisterScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [wechatId, setWechatId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { updateAccountsAfterRegistration } = useContext(ContextApp);

  const handleRegister = async () => {
    try {
      const url = "http://localhost:3000/accounts";
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          wechatId: wechatId,
          phone: phoneNumber,
          password: password,
          avatar: IMGS.avatar,
        }),
      });

      if (result.ok) {
        await updateAccountsAfterRegistration();
        navigation.navigate(ROUTES.LOGIN);
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Đăng ký bằng số điện thoại</Text>

      <View style={{ alignItems: "center" }}>
        <Image
          source={IMGS.cam}
          style={{ width: 50, height: 50, resizeMode: "contain" }}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.textName}>Tên</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Trần Văn"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.textName}>WechatID</Text>
        <TextInput
          style={styles.textInput}
          placeholder="tranvan"
          value={wechatId}
          onChangeText={(text) => setWechatId(text)}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.textName}>Điện thoại</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập số điện thoại"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.textName}>Mật khẩu</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập mật khẩu "
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View>
        <Text style={styles.error}>{error}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </Pressable>
      </View>

      <View style={styles.linkContainer}>
        <Pressable onPress={() => navigation.navigate(ROUTES.LOGIN)}>
          <Text style={styles.linkText}>Đã có tài khoản? Đăng nhập ngay</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        padding: 20,
        paddingLeft: 10
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
        color: COLORS.black,
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
        marginVertical: 10,
    },
    textInput: {
        padding: 8,
        fontSize: 18,
        color: COLORS.black,
    },
    buttonContainer: {
        alignItems: "center",
        marginVertical: 20,
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
        color: COLORS.red,
        textAlign: "center",
    },
    linkContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    linkText: {
        color: COLORS.blue,
    },
});
