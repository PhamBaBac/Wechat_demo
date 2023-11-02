import React, { useState, useContext } from 'react';
import { Text, SafeAreaView, FlatList, View, Image } from 'react-native';
import { COLORS, IMGS } from '../../constants';
<<<<<<< HEAD
import { SearchContext } from '../../context/SearchContext';
=======


>>>>>>> f5152d81825cc44997d9a8e25e7855bfdf53b248
const PhoneBook = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Hoài An', phone: '123-456-7890', avatarUrl: IMGS.human },
    { id: 2, name: 'Gia Kì', phone: '987-654-3210', avatarUrl: IMGS.human },
    { id: 3, name: 'Hạnh Chi', phone: '987-654-3210', avatarUrl: IMGS.human },
    { id: 4, name: 'Hạnh Chi', phone: '987-654-3210', avatarUrl: IMGS.human },
    // Add other contacts as needed
  ]);
<<<<<<< HEAD

  const handleAddContact = (newContact) => {
    setContacts([contacts, { id: contacts.length + 1, newContact }]);
  };
  
  const { searchText } = useContext(SearchContext);

  const filteredData = contacts.filter((item) =>
    item.phone.toLowerCase().includes(searchText.toLowerCase()) ||
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
=======
   
  const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
  
>>>>>>> f5152d81825cc44997d9a8e25e7855bfdf53b248

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#BCB9B7', marginVertical: 5 }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
              source={{ uri: item.avatarUrl }}
            />
            <Text style={{ marginHorizontal: 10, fontSize: 20 }}>{item.name}</Text>


            

          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default PhoneBook;
