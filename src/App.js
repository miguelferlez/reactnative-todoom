import React, { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MenuProvider } from 'react-native-popup-menu';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {

  const [colorScheme, setColorScheme] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('isDarkMode').then((value) => {
      if (value == null || value == '0') {
        setColorScheme('light');
      } else {
        setColorScheme('dark');
      }
      SplashScreen.hide();
    });
  }, [])

  return (
    <MenuProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </MenuProvider>
  )
}