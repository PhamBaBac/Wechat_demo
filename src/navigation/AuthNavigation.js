import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Default,Login } from '../screens/index';
import { ROUTES } from '../constants';
import BottomTabNaVigator from './BottomTabNaVigator';
import AddPhoneBook from '../screens/PhoneBook/addPhoneBook';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.DEFAULT}>
      {/* <Stack.Screen name={ROUTES.LOGIN} component={Login}/>
      <Stack.Screen name={ROUTES.DEFAULT} component={Default} options={{headerShown: false}} /> */}
      <Stack.Screen name={ROUTES.HOME} component={BottomTabNaVigator} options={{headerShown: false}} />
      <Stack.Screen name={ROUTES.ADD_PHONEBOOK} component={AddPhoneBook} options={{ headerShown:true}}></Stack.Screen>
     <Stack.Screen name={ROUTES.EDIT_PROFILE} component={Default} options={{headerShown: false}} />
      
  
   
    </Stack.Navigator>
  );
}
export default AuthNavigation;