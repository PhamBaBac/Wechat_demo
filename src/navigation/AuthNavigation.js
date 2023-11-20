import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Default,Login,EditProfile,AddPhoneBook,ChatScreen} from '../screens/index';
import { COLORS, ROUTES } from '../constants';
import BottomTabNaVigator from './BottomTabNaVigator';



const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.DEFAULT}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login}/>
      <Stack.Screen name={ROUTES.DEFAULT} component={Default} options={{headerShown: false}} />
      <Stack.Screen name={ROUTES.HOME} component={BottomTabNaVigator} options={{headerShown: false}} />
      <Stack.Screen name={ROUTES.ADD_PHONEBOOK} component={AddPhoneBook} options={{ headerShown:true}}></Stack.Screen>
     <Stack.Screen name={ROUTES.EDIT_PROFILE} component={EditProfile} options={{headerShown: true}} />
      <Stack.Screen name={ROUTES.CHAT_SCREEN} component={ChatScreen}  options={({ route }) => ({title: route.params.userName, headerTitleAlign: 'center',headerStyle: {
            backgroundColor: COLORS.gray,
          },})}/>
    </Stack.Navigator>
  );
}
export default AuthNavigation;