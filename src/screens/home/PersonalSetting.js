import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { COLORS, IMGS, ROUTES } from "../../constants";
import Modal from "react-native-modal";
import { ContextApp } from "../../context/contextApp";
import { useNavigation } from "@react-navigation/native";
import { Switch } from "react-native";
const PersonalSetting = (route) => {
  const navigation = useNavigation();
  const { theme, updateProfilesAfterRegistration } = useContext(ContextApp);
  const uid = route.route.params.uid;
  const [isDeleted, setIsDeleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/profiles/${uid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsDeleted(true);
        await updateProfilesAfterRegistration();
        navigation.navigate(ROUTES.PHONEBOOK);
      } 
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.backgroundColor[0] }}>
      <View
        style={[
          { backgroundColor: COLORS.white },
          { backgroundColor: theme.backgroundColor[1] },
        ]}
      >
        <Pressable style={styles.TextSection}>
          <Text style={{ fontSize: 18, color: theme.color }}>
            Cài nhận xét và dán nhãn
          </Text>
          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
            }}
          />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 15,
            backgroundColor: theme.backgroundColor[1],
          }}
        >
          <Pressable style={{ padding: 12 }}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Quyền riêng tư
            </Text>
          </Pressable>
          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
            }}
          />
        </View>
      </View>
      <View
        style={[
          { backgroundColor: COLORS.white },
          { backgroundColor: theme.backgroundColor[1], marginVertical: 6 },
        ]}
      >
        <Pressable style={styles.TextSection}>
          <Text style={{ fontSize: 18, color: theme.color }}>
            Chia sẻ số liên lạc
          </Text>
          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
            }}
          />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 15,
            backgroundColor: theme.backgroundColor[1],
          }}
        >
          <Pressable style={{ padding: 12 }}>
            <Text style={{ fontSize: 18, color: theme.color }}>
              Thêm vào màn hình
            </Text>
          </Pressable>
          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
            }}
          />
        </View>
      </View>
      <Pressable
        style={{
          height: 50,
          backgroundColor: theme.backgroundColor[1],
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 18, marginLeft: 10, color: theme.color }}>
          Thêm sao
        </Text>
        <Switch
          style={{ marginRight: 20 }}
          trackColor={{ false: COLORS.gray, true: COLORS.blueLight }}
        />
      </Pressable>
      <View
        style={[
          { backgroundColor: COLORS.white },
          { backgroundColor: theme.backgroundColor[1], marginVertical: 6 },
        ]}
      >
        <Pressable style={styles.TextSection}>
          <Text style={{ fontSize: 18, color: theme.color }}>Chặn</Text>
          <Switch
            style={{ marginRight: 6 }}
            trackColor={{ false: COLORS.gray, true: COLORS.blueLight }}
          />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 15,
            backgroundColor: theme.backgroundColor[1],
          }}
        >
          <Pressable style={{ padding: 12 }}>
            <Text style={{ fontSize: 18, color: theme.color }}>Báo cáo</Text>
          </Pressable>
          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
            }}
          />
        </View>
      </View>
      <Pressable
        onPress={openModal}
        style={{
          height: 50,
          backgroundColor: theme.backgroundColor[1],
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 18, marginLeft: 10, color: COLORS.red }}>
          Xóa
        </Text>
      </Pressable>
      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Bạn có chắc chắn muốn xóa?</Text>
            <View style={styles.modalButtons}>
              <Pressable
                onPress={handleDelete}
                style={[styles.modalButton, { backgroundColor: COLORS.red }]}
              >
                <Text style={styles.buttonText}>OK</Text>
              </Pressable>
              <Pressable
                onPress={closeModal}
                style={[styles.modalButton, { backgroundColor: COLORS.gray }]}
              >
                <Text style={styles.buttonText}>Hủy</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default PersonalSetting;
const styles = StyleSheet.create({
  TextSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayLight,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    width: 300,
    height: 150,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    width: 80,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
  },
});
