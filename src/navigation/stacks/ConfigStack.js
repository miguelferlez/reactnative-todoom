import React, {useState, useEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfigScreen from '../../containers/Config';
import * as Color from '../../styles/Colors';
import { headerTitle, headerTitleDarkMode } from '../../styles/Typography';
import { TouchableOpacity, Appearance } from 'react-native';
import { BackBlack, BackWhite, DropDownBlack, DropDownWhite } from '../../styles/Icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function ConfigStack({ navigation }) {

    const [colorScheme, setColorScheme] = useState(null);
    
    useEffect(() => {
        AsyncStorage.getItem('isDarkMode').then((value) => {
            if (value == null || value == '0') {
                setColorScheme('light');
            } else {
                setColorScheme('dark');
            }
        })
    }, [colorScheme]);

    return (
        <Stack.Navigator>
            <Stack.Screen name="Configuración" component={ConfigScreen}
                options={colorScheme === 'light' ? {
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Color.white },
                    headerTitleStyle: { ...headerTitle },
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Mis tareas')}>
                                <BackBlack />
                            </TouchableOpacity>
                        );
                    },
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <DropDownBlack />
                            </TouchableOpacity>
                        );
                    },                  
                } :
                {
                    headerTitleAlign: 'center', 
                    headerStyle: {backgroundColor:Color.blackRaisin},
                    headerTitleStyle: {...headerTitleDarkMode},
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Mis tareas')}>
                                <BackWhite />
                            </TouchableOpacity>
                        );
                    },
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <DropDownWhite />
                            </TouchableOpacity>
                        );
                    },
                }
            } 
            />
        </Stack.Navigator>
    )
}