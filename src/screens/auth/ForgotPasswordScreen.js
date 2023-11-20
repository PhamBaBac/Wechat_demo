import React, { useState, useContext } from "react";
import { Text, TextInput, Pressable, View, SafeAreaView, StyleSheet } from "react-native";
import { COLORS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { ContextApp } from "../../context/contextApp";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const { users } = useContext(ContextApp);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = () => {
    const user = users.find((user) => user.phone === phoneNumber);

    if (user) {
      navigation.navigate(ROUTES.LOGIN);
    } else {
      setError("Phone number not found");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Quên mật khẩu</Text>

      <View style={styles.input}>
        <Text style={styles.textName}>Điện thoại</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập số điện thoại"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
      </View>

      <View>
        <Text style={styles.error}>{error}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Gửi yêu cầu đặt lại mật khẩu</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    padding: 20,
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
    flex: 1,
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
    width: 250, // Adjusted width
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
});

export default ForgotPasswordScreen;
