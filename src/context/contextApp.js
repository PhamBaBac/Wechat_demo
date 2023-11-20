import React, { createContext, useState } from 'react';

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
      phone: "0123",
      pass: "123456",
    },
  ]);

  return (
    <ContextApp.Provider value={{ searchText, setSearchText, users, setUsers }}>
      {children}
    </ContextApp.Provider>
  );
};
