import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactScreen from '../../containers/Contact';
import * as Color from '../../styles/Colors';
import { headerTitle } from '../../styles/Typography';
import { TouchableOpacity, Image } from 'react-native';

const Stack = createNativeStackNavigator();

export default function ContactStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contáctanos" component={ContactScreen} 
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