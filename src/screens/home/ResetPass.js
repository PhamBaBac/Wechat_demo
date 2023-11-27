import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  Pressable,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { ContextApp } from "../../context/contextApp";

const ResetPass = () => {
  const navigation = useNavigation();
  const { accounts, updateAccountsAfterRegistration} = useContext(ContextApp);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notifi, setNotifi] = useState(""); // Change from setError to setNotifi
  const currentUser = accounts.length > 0 ? accounts[0] : null;

  const handleUpdatePassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        setNotifi("Mật khẩu mới và xác nhận mật khẩu không khớp"); // Change from setError to setNotifi
        return;
      }

      if (currentUser.password !== oldPassword) {
        setNotifi("Mật khẩu cũ không đúng"); // Change from setError to setNotifi
        return;
      }

      const response = await axios.put(
        `http://localhost:3000/accounts/${currentUser.id}`,
        {
          ...currentUser,
          password: newPassword,
        }
      );

      if (response.status === 200) {
        await updateAccountsAfterRegistration();
        setNotifi("Thay đổi mật khẩu thành công");
      }
    } catch (error) {
      setNotifi("Đã xảy ra lỗi khi cập nhật mật khẩu");
      console.error("Error updating password:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Nhập mật khẩu mới cho tài khoản này.
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>WechatID</Text>
        <Text style={styles.infoText}>
          {currentUser ? currentUser.wechatId : ""}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mật khẩu cũ</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu cũ"
          value={oldPassword}
          onChangeText={(text) => setOldPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mật khẩu mới</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu mới"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Xác nhận mật khẩu</Text>
        <TextInput
          style={styles.input}
          placeholder="Xác nhận mật khẩu"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
      </View>
      <View>
        <Text style={styles.notifi}>{notifi}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleUpdatePassword}>
          <Text style={styles.buttonText}>Xong</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.white,
    padding: 16,
    justifyContent: "flex-start",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: COLORS.gray,
    marginVertical: 20,

  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayLight,
    padding: 10,
  },
  label: {
    fontSize: 18,
    color: COLORS.black,
    width: 140,
  },
  infoText: {
    padding: 8,
    fontSize: 18,
    color: COLORS.gray,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayLight,
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 18,
    color: COLORS.grayLight,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
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
  notifi: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.red,
  },
});

export default ResetPass;
