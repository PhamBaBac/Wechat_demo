import React, { createContext, useState } from 'react';
import { IMGS } from '../constants';
export const ContextApp = createContext();

export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([
    {
      name: "Nguyễn Văn A",
      wechatId: "nguyenvana",
      phone: "0123456789",
      pass: "123456",
    },
    {
      name: "Nguyễn Văn B",
      wechatId: "nguyenvanb",
      phone: "0987654321",
      pass: "123456",
    },
  ]);
  const [profile] = useState([
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
  ]);
  return (
    <ContextApp.Provider value={{ searchText, setSearchText, users, setUsers, profile }}>
      {children}
    </ContextApp.Provider>
  );
};
