<<<<<<< HEAD
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import { COLORS, IMGS } from '../../constants';

const ProfileImage = () => {
  return (
    <Image
      source={IMGS.human}
      style={{ width: 80, height: 80, borderRadius: 40 }}
    />
  );
};

const EditProfile = () => {
  // State variables
  const [name, setName] = useState('Hoai An');
  const [wechatID, setWechatID] = useState('22015');

  // Event handler for saving changes
  const handleSave = () => {
    // Add logic here to save the changes (e.g., send to server)
    console.log('Changes saved!');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
        <ProfileImage />
        <View style={{ marginLeft: 10 }}>
          <TextInput
            style={{ fontWeight: 'bold', fontSize: 25 }}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            value={wechatID}
            onChangeText={(text) => setWechatID(text)}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: COLORS.primary,
          borderRadius: 5,
          margin: 10,
        }}
        onPress={handleSave}
      >
        <Text style={{ color: COLORS.white, fontSize: 18 }}>Save Changes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditProfile;
=======
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import { COLORS, IMGS } from '../../constants';

const ProfileImage = () => {
  return (
    <Image
      source={IMGS.human}
      style={{ width: 80, height: 80, borderRadius: 40 }}
    />
  );
};

const EditProfile = () => {
  // State variables
  const [name, setName] = useState('Hoai An');
  const [wechatID, setWechatID] = useState('22015');

  // Event handler for saving changes
  const handleSave = () => {
    // Add logic here to save the changes (e.g., send to server)
    console.log('Changes saved!');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
        <ProfileImage />
        <View style={{ marginLeft: 10 }}>
          <TextInput
            style={{ fontWeight: 'bold', fontSize: 25 }}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            value={wechatID}
            onChangeText={(text) => setWechatID(text)}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: COLORS.primary,
          borderRadius: 5,
          margin: 10,
        }}
        onPress={handleSave}
      >
        <Text style={{ color: COLORS.white, fontSize: 18 }}>Save Changes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditProfile;
>>>>>>> origin/master
