import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontFamily: 'VeniceClassic', color: 'rgb(46,46,56)', fontSize: 60 }}>Header</Text>
      <Text style={{ fontFamily: 'ZillaSlab-Medium', color: 'rgb(46,46,56)', fontSize: 18 }}>Body sample text</Text>
    </View>
  )
}