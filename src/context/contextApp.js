import React, { createContext, useEffect, useState } from 'react';

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

  return (
    <ContextApp.Provider value={{ searchText, setSearchText, accounts, setAccounts, profiles, setProfiles, fetchAccounts,updateAccountsAfterRegistration }}>
      {children}
    </ContextApp.Provider>
  );
};
