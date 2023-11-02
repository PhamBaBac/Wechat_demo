import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";

import { AppProvider } from "./src/context/SearchContext";

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
