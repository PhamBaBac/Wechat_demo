import React, { useContext } from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, IMGS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { ContextApp } from "../../context/contextApp";

const PhoneBook = () => {
  const navigation = useNavigation();
  const { profiles, searchText, theme } = useContext(ContextApp);
  const filteredData = profiles.filter(
    (item) =>
      item.userName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleUserPress = (selectedProfile) => {
    navigation.navigate(ROUTES.PERSONAL_CHAT, { profiles: selectedProfile });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor[3],
      }}
    >
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.container,
              { backgroundColor: theme.backgroundColor[1] },
            ]}
          >
            <TouchableOpacity onPress={() => handleUserPress(item)}>
              <View style={styles.card}>
                <View style={styles.UserInfo}>
                  <View style={styles.UserImgWrapper}>
                    <Image source={item.userImg} style={styles.UserImg} />
                  </View>
                  <View style={styles.TextSection}>
                    <View style={styles.UserInfoText}>
                      <Text style={[styles.UserName, { color: theme.color }]}>
                        {item.userName}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default PhoneBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
  },
  UserInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  UserImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  TextSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  UserInfoText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  UserName: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Lato-Regular",
  },
});
