import React,{useContext} from 'react';
import { Text, SafeAreaView, FlatList, View, Image, TouchableOpacity,StyleSheet  } from 'react-native';
import { COLORS, ROUTES } from '../../constants';
import { useNavigation } from "@react-navigation/native";
import { ContextApp } from '../../context/contextApp';
const Home = () => {
  const navigation = useNavigation();
  const { profiles, searchText,theme} = useContext(ContextApp);
  const filteredData = profiles.filter(
    (item) =>
      item.userName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor[3],
      }}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.container,{backgroundColor: theme.backgroundColor[1]}]}>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.CHAT_SCREEN,{userName: item.userName,})}>
            <View style={styles.card}>
              <View style={styles.UserInfo}>
                <View style={styles.UserImgWrapper}>
                  <Image source={item.userImg} style={styles.UserImg} />
                </View>
                <View style={styles.TextSection}>
                  <View style={styles.UserInfoText}>
                    <Text style={[styles.UserName,{color:theme.color}]}>{item.userName}</Text>
                    <Text style={[styles.PostTime, {color:theme.color}]}>{item.messageTime}</Text>
                  </View>
                  <Text style={[styles.MessageText, {color:theme.color}]}>{item.messageText}</Text>
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
export default Home;
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
  },
  UserImgWrapper:{
    paddingTop: 15,
    paddingBottom: 15,
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
  PostTime:{
    fontSize: 12,
    color: '#666',
    fontFamily: 'Lato-Regular',
  },
  MessageText:{
    fontSize: 14,
    color: '#333333',
  }
});