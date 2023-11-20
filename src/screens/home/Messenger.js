import React from 'react';
import { Text, SafeAreaView, FlatList, View, Image, TouchableOpacity,StyleSheet  } from 'react-native';
import { COLORS, IMGS,ROUTES } from '../../constants';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const Messages = [
    {
      id: '1',
      userName: 'Jenny Doe',
      userImg:IMGS.human,
      messageTime: '4 mins ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'John Doe',
      userImg: IMGS.human,
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
  ]
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <FlatList
        data={Messages}
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
                    <Text style={styles.PostTime}>{item.messageTime}</Text>
                  </View>
                  <Text style={styles.MessageText}>{item.messageText}</Text>
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