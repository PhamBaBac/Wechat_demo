import React, { createContext, useEffect, useState } from 'react';
import { IMGS } from '../constants';
export const ContextApp = createContext();

export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  // const [users, setUsers] = useState([
  //   {
  //     name: "Nguyễn Văn A",
  //     wechatId: "nguyenvana",
  //     phone: "0123456789",
  //     pass: "123456",
  //   },
  //   {
  //     name: "Nguyễn Văn B",
  //     wechatId: "nguyenvanb",
  //     phone: "0987654321",
  //     pass: "123456",
  //   },
  // ]);
  // console.log("users", users);
  // lay du lieu tu api
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/accounts")
      .then((res) => res.json())
      .then((data) => {
        setAccounts(data);
      });
  }, []);
  
  // getApi profile
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/profiles")
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
      });
  }, []);
  return (
    <ContextApp.Provider value={{ searchText, setSearchText, accounts, setAccounts, profiles, setProfiles}}>
      {children}
    </ContextApp.Provider>
  );
};
