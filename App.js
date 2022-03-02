import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding1 from './src/screens/Onboarding1';
import Onboarding3 from './src/screens/Onboarding3';
import Onboarding2 from './src/screens/Onboarding2';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import ChangePassword from './src/screens/ChangePassword';
import JoinAs from './src/screens/JoinAs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="JoinAs" component={JoinAs} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
