import React, { createContext, useEffect, useState } from 'react';
import theme from "../theme/theme";
import { EventRegister } from 'react-native-event-listeners'
export const ContextApp = createContext();

export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [accounts, setAccounts] = useState([]);

  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("http://localhost:3000/profiles");
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await fetch("http://localhost:3000/accounts");
      const data = await response.json();
      setAccounts(data);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []); 

  const updateAccountsAfterRegistration = async () => {
    await fetchAccounts();
  };

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const listener = EventRegister.addEventListener('changeTheme', (data) => {
      setDarkMode(data)
      console.log(data)
    })
    return () => {
      EventRegister.removeEventListener(listener)
    }
  }, [darkMode])

  return (
    <ContextApp.Provider value={{  theme: darkMode === true ? theme.dark : theme.light,searchText, setSearchText, accounts, setAccounts, profiles, setProfiles, fetchAccounts,updateAccountsAfterRegistration}}>
      {children}
    </ContextApp.Provider>
  );
};
