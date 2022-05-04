import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Color from '../../styles/Colors';
import { headerTitle, headerTitleDarkMode } from '../../styles/Typography';
import ListTaskScreen from '../../containers/ListTask';
import CreateTaskScreen from '../../containers/CreateTask';
import EditTaskScreen from '../../containers/EditTask';
import { TouchableOpacity, Appearance } from 'react-native';
import { BackBlack, BackWhite, DropDownBlack, DropDownWhite } from '../../styles/Icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function TaskStack({ navigation }) {

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
        <Stack.Navigator initialRouteName='Mis tareas'>
            <Stack.Screen name="Mis tareas" component={ListTaskScreen}
                options={colorScheme === 'light' ? {
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Color.white },
                    headerTitleStyle: { ...headerTitle },
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <DropDownBlack />
                            </TouchableOpacity>
                        );
                    },
                } : 
                {
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Color.blackRaisin },
                    headerTitleStyle: { ...headerTitleDarkMode },
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <DropDownWhite />
                            </TouchableOpacity>
                        );
                    },
                }
            }
            />
            <Stack.Screen name="Añadir tareas" component={CreateTaskScreen}
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
                    headerStyle: { backgroundColor: Color.blackRaisin },
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
            <Stack.Screen name="Editar tareas" component={EditTaskScreen}
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
                    headerStyle: { backgroundColor: Color.blackRaisin },
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