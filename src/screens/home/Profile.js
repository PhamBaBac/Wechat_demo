import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, IMGS } from '../../constants';
import { View } from 'react-native-web';
import QRCode from 'react-native-qrcode-svg';

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{}}>
      <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center', }}>
        <Image source={IMGS.human} style={{ width: 80, height: 80, borderRadius: 15, backgroundColor:COLORS.black }} />

        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Hoai An</Text>
          <Text style={{fontSize:18}}>Wechat ID: Hoaiand</Text>
        </View>
      </View>

    <TouchableOpacity style={{flexDirection:'row', width:200, height:40,backgroundColor:COLORS.grayLight, borderRadius:15,justifyContent:'center',alignItems:'center', marginLeft:15,marginVertical:15}}>
      <Text style={{fontSize:20, fontWeight:'600'}}>+</Text>
      <Text style={{fontSize:20, fontWeight:'600'}}>Trạng thái</Text>
    </TouchableOpacity>

      </View>
      <TouchableOpacity
        style={{ padding: 20, borderBottomWidth: 1, borderColor: COLORS.lightGray,borderTopWidth: 1, }}
        onPress={() => { navigation.navigate('EditProfile') }}
      >
        <Text style={{ fontSize: 18, }}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={{ padding: 20, borderBottomWidth: 1, borderColor: COLORS.lightGray, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, }}>Tên:</Text>
        <Text style={{ fontSize: 18 }}>Hoài An</Text>
      </View>

      <View style={{ padding: 20, borderBottomWidth: 1, borderColor: COLORS.lightGray, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, }}>wechat ID:</Text>
        <Text style={{ fontSize: 18 }}>Hoaiand</Text>
      </View>

      <View style={{ padding: 20, borderBottomWidth: 1, borderColor: COLORS.lightGray, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, }}>Mã QR của tôi:</Text>
        <QRCode value="https://example.com" size={25} />
      </View>


      <TouchableOpacity
        style={{ padding: 20, borderBottomWidth: 1, borderColor: COLORS.lightGray,borderTopWidth: 1, }}>
        <Text style={{ fontSize: 18, }}>Cài đặt</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ padding: 20, borderBottomWidth: 1, borderColor: COLORS.lightGray,borderTopWidth: 1, }}>
        <Text style={{ fontSize: 18, }}>Đăng xuất</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
