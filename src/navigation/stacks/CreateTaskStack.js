import React, { useEffect, useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateTaskScreen from '../../containers/CreateTask';
import { body, bodyDarkMode, headerTitle, headerTitleDarkMode } from '../../styles/Typography';
import { TouchableOpacity, View, Text } from 'react-native';
import { BackBlack, BackWhite, DropDownBlack, DropDownWhite } from '../../styles/Icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { centered, container, containerDarkMode } from '../../styles/Containers';

const Stack = createNativeStackNavigator();

export default function CreateTaskStack({ navigation }) {
    const [colorScheme, setColorScheme] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        AsyncStorage.getItem('isDarkMode').then((value) => {
            if (value == null || value == '0') {
                setColorScheme('light');
            } else {
                setColorScheme('dark');
            }
        }).then(setIsLoading(false));
    }, []);

    if (isLoading) {
        return (
            <View style={colorScheme === 'light' ? [container, centered] : [containerDarkMode, centered]}>
                <Text style={colorScheme === 'light' ? body : bodyDarkMode}>Cargando...</Text>
            </View>
        );
    } else {
        return (
            <Stack.Navigator initialRouteName='Mis tareas'>
                <Stack.Screen name="Añadir tareas" component={CreateTaskScreen}
                    options={colorScheme === 'light' ? {
                        headerTitleAlign: 'center',
                        headerTransparent: true,
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
                        headerTransparent: true,
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
        );
    }
}