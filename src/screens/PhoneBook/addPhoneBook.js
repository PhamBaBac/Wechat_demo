import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddPhoneBook =  () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = () => {
   
  };

  return (
    <View  style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <View  style={{borderWidth:0.5, borderRadius:15, width:300, height:50, alignItems:'center'}}>
      <TextInput style={{width:300, height:50,borderRadius:15, paddingLeft:10}}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      </View>
      <View style={{borderWidth:0.5, borderRadius:15, width:300, height:50, marginVertical:15, alignItems:'center'}}>
      <TextInput style={{width:300, height:50,borderRadius:15,paddingLeft:10}}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      </View>
     <View style={{width:200 , borderRadius:10}}>
     <Button title="Add Contact" onPress={handleAddContact} />
     </View>
    </View>
  );
};

export default AddPhoneBook;
