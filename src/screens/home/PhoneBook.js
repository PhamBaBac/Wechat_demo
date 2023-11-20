import React,{useContext} from 'react';
import { Text, SafeAreaView, FlatList, View, Image, TouchableOpacity,StyleSheet  } from 'react-native';
import { COLORS, IMGS,ROUTES } from '../../constants';
import { useNavigation } from "@react-navigation/native";
import { ContextApp } from '../../context/contextApp';
const PhoneBook = () => {
  const navigation = useNavigation();
  const { profile} = useContext(ContextApp);
  console.log(profile);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <FlatList
        data={profile}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.CHAT_SCREEN,{userName: item.userName})}>
            <View style={styles.card}>
              <View style={styles.UserInfo}>
                <View style={styles.UserImgWrapper}>
                  <Image source={item.userImg} style={styles.UserImg} />
                </View>
                <View style={styles.TextSection}>
                  <View style={styles.UserInfoText}>
                    <Text style={styles.UserName}>{item.userName}</Text>
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
    alignItems: 'center', 
    justifyContent: 'center'
  },
  card:{
    width: '100%',
  },
  UserInfo:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 10,
  },
  UserImg:{
    width:50, 
    height:50, 
    borderRadius:25,
  },
  TextSection:{
    flexDirection: 'column', 
    justifyContent: 'center', 
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  UserInfoText:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 5,
  },
  UserName:{
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
});