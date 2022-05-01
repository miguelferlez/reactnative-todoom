import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../../containers/About';
import * as Color from '../../styles/Colors';
import { headerTitle } from '../../styles/Typography';
import { Image, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Sobre nosotros" component={AboutScreen} 
                options={{
                    headerTitleAlign: 'center', 
                    headerStyle: { 
                        backgroundColor: Color.white 
                    }, 
                    headerTitleStyle: {
                        ...headerTitle,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Mis tareas')}>
                                <Image source={require('../../assets/icons/black/back-black.png')} />
                            </TouchableOpacity>
                        );
                    },
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Image source={require('../../assets/icons/black/drawermenu-black.png')} />
                            </TouchableOpacity>
                        );
                    },                  
                }} 
            />
        </Stack.Navigator>
    )
}