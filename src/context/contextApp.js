import React, { createContext, useEffect, useState } from "react";
import theme from "../theme/theme";
import { EventRegister } from "react-native-event-listeners";
export const ContextApp = createContext();

export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const handleLogin = (phoneNumber, password) => {
    const account = accounts.find((account) => account.phone === phoneNumber);

    if (account) {
      if (account.password === password) {
        setLoggedInUser(account);
      } else {
        throw new Error("Mật khẩu không đúng. Vui lòng kiểm tra lại");
      }
    } else {
      throw new Error("Người dùng không tồn tại. Vui lòng kiểm tra lại số điện thoại");
    }
  };


  const [profiles, setProfiles] = useState([]);
  const fetchProfiles = async () => {
    try {
      const response = await fetch("http://localhost:3000/profiles");
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };
  useEffect(() => {
    fetchProfiles();
  }, []);

  const updateProfilesAfterRegistration = async () => {
    await fetchProfiles();
  };

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
    const listener = EventRegister.addEventListener("changeTheme", (data) => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeEventListener(listener);
    };
  }, [darkMode]);

  const userProfiles = loggedInUser
  ? profiles.filter((profile) => profile.accountID === loggedInUser.accountID)
  : [];
  
  return (
    <ContextApp.Provider
      value={{
        theme: darkMode === true ? theme.dark : theme.light,
        searchText,
        setSearchText,
        accounts,
        setAccounts,
        profiles,
        setProfiles,
        fetchAccounts,
        updateAccountsAfterRegistration,
        updateProfilesAfterRegistration,
        loggedInUser,
        setLoggedInUser,
        handleLogin,
        userProfiles,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
