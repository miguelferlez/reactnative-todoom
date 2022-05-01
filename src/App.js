import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <MenuProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </MenuProvider>
  )
}