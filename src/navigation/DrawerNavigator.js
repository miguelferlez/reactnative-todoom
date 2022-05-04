import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OnboardingScreen from '../containers/Onboarding'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { body, bodyDarkMode, headerList } from "../styles/Typography";
import * as Color from '../styles/Colors';
import TaskStack from "./stacks/TaskStack";
import CreateTaskStack from "./stacks/CreateTaskStack";
import AboutStack from "./stacks/AboutStack";
import ContactStack from "./stacks/ContactStack";
import ConfigStack from "./stacks/ConfigStack";
import Exit from "./Exit";
import { ListTaskBlack, ListTaskWhite, CreateTaskBlack, CreateTaskWhite, AboutBlack, AboutWhite, ContactBlack, ContactWhite, ConfigBlack, ConfigWhite, ExitBlack, ExitWhite } from "../styles/Icons";
import { centered, container, containerDarkMode } from "../styles/Containers";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    const [isLoading, setIsLoading] = useState(true);
    const [onboardingShown, setOnboardingShown] = useState(null);
    const [isDrawerVisible, setIsDraweVisible] = useState(false);
    const childToParent = (childData) => { setIsDraweVisible(childData) };
    const [colorScheme, setColorScheme] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('onboardingShown').then((value) => {
            if (value == null || value == '0') {
                setOnboardingShown(0);
            } else {
                setOnboardingShown(1);
            }
        });
        AsyncStorage.getItem('isDarkMode').then((value) => {
            if (value == null || value == '0') {
                setColorScheme('light');
            } else {
                setColorScheme('dark');
            }
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <View style={colorScheme === 'dark' ? [container, centered] : [containerDarkMode, centered]}>
                <Text style={colorScheme === 'light' ? bodyDarkMode : body}>Cargando...</Text>
            </View>
        );
    } else if (!isDrawerVisible && onboardingShown === 0) {
        return (
            <OnboardingScreen childToParent={childToParent} />
        );
    } else {
        if (colorScheme === 'light') {
            return (
                // <View style={container}>
                //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                //         <Text style={{ fontFamily: 'VeniceClassic', color: 'rgb(46,46,56)', fontSize: 60 }}>Header</Text>
                //         <Text style={{ fontFamily: 'ZillaSlab-Medium', color: 'rgb(46,46,56)', fontSize: 18 }}>Body sample text</Text>
                //     </View>
                // </View>
                <Drawer.Navigator drawerPosition="left"
                    screenOptions={{
                        drawerContentStyle: {
                            backgroundColor: Color.white,
                        },
                        drawerInactiveBackgroundColor: Color.white,
                        drawerActiveBackgroundColor: Color.greyLight,
                    }}
                >
                    <Drawer.Screen name="ListTask" component={TaskStack}
                        options={{
                            drawerLabel: () => <Text style={body}>Mis tareas</Text>,
                            drawerIcon: () => <ListTaskBlack />,
                            headerShown: false
                        }}
                    />
                    <Drawer.Screen name="CreateTask" component={CreateTaskStack}
                        options={{
                            drawerLabel: () => <Text style={body}>Añadir tarea</Text>,
                            drawerIcon: () => <CreateTaskBlack />,
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen name="About" component={AboutStack}
                        options={{
                            drawerLabel: () => <Text style={body}>Sobre nosotros</Text>,
                            drawerIcon: () => <AboutBlack />,
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen name="Contact" component={ContactStack}
                        options={{
                            drawerLabel: () => <Text style={body}>Contáctanos</Text>,
                            drawerIcon: () => <ContactBlack />,
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen name="Config" component={ConfigStack}
                        options={{
                            drawerLabel: () => <Text style={body}>Configuración</Text>,
                            drawerIcon: () => <ConfigBlack />,
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen name="Exit" component={Exit}
                        options={{
                            drawerLabel: () => <Text style={body}>Salir</Text>,
                            drawerIcon: () => <ExitBlack />,
                            headerShown: false,
                        }}
                    />
                </Drawer.Navigator>
            );
        } else {
            return (
                <Drawer.Navigator drawerPosition="left"
                    screenOptions={{
                        drawerContentStyle: {
                            backgroundColor: Color.blackRaisin,
                        },
                        drawerInactiveBackgroundColor: Color.blackRaisin,
                        drawerActiveBackgroundColor: Color.blackSpace,
                    }}
                >
                    <Drawer.Screen name="ListTask" component={TaskStack}
                        options={{
                            drawerLabel: () => <Text style={bodyDarkMode}>Mis tareas</Text>,
                            drawerIcon: () => <ListTaskWhite />,
                            headerShown: false
                        }}
                    />
                    <Drawer.Screen name="CreateTask" component={CreateTaskStack}
                        options={{
                            drawerLabel: () => <Text style={bodyDarkMode}>Añadir tarea</Text>,
                            drawerIcon: () => <CreateTaskWhite />,
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen name="About" component={AboutStack}
                        options={{
                            drawerLabel: () => <Text style={bodyDarkMode}>Sobre nosotros</Text>,
                            drawerIcon: () => <AboutWhite />,
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen name="Contact" component={ContactStack}
                        options={{
                            drawerLabel: () => <Text style={bodyDarkMode}>Contáctanos</Text>,
                            drawerIcon: () => <ContactWhite />,
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen name="Config" component={ConfigStack}
                        options={{
                            drawerLabel: () => <Text style={bodyDarkMode}>Configuración</Text>,
                            drawerIcon: () => <ConfigWhite />,
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen name="Exit" component={Exit}
                        options={{
                            drawerLabel: () => <Text style={bodyDarkMode}>Salir</Text>,
                            drawerIcon: () => <ExitWhite />,
                            headerShown: false,
                        }}
                    />
                </Drawer.Navigator>
            );
        }
    }
}