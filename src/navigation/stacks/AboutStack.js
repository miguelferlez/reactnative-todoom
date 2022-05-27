import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../../containers/About';
import { body, bodyDarkMode, headerTitle, headerTitleDarkMode } from '../../styles/Typography';
import { TouchableOpacity, View, Text } from 'react-native';
import { BackBlack, BackWhite, DropDownBlack, DropDownWhite } from '../../styles/Icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { centered, container, containerDarkMode } from '../../styles/Containers';
import * as Color from '../../styles/Colors';

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {
    const [colorScheme, setColorScheme] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function getColorScheme() {
        await AsyncStorage.getItem('isDarkMode').then((value) => {
            if (value == null || value == '0') {
                setColorScheme('light');
            } else {
                setColorScheme('dark');
            }
        })
    }

    useEffect(() => {
        getColorScheme();
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <View style={colorScheme === 'light' ? [container, centered] : [containerDarkMode, centered]}>
                <Text style={colorScheme === 'light' ? body : bodyDarkMode}>Cargando...</Text>
            </View>
        );
    } else {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Sobre nosotros" component={AboutScreen}
                    options={colorScheme === 'light' ? {
                        headerTitleAlign: 'center',
                        headerStyle:{ backgroundColor: Color.white },
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
                            headerStyle:{ backgroundColor: Color.blackRaisin },
                            headerTitleStyle: { ...headerTitleDarkMode },
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

}