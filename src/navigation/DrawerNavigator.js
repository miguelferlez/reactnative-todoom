import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OnboardingScreen from '../containers/Onboarding'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { body, header } from "../styles/Typography";
import * as Color from '../styles/Colors';
import TaskStack from "./stacks/TaskStack";
import CreateTaskStack from "./stacks/CreateTaskStack";
import AboutStack from "./stacks/AboutStack";
import ContactStack from "./stacks/ContactStack";
import ConfigStack from "./stacks/ConfigStack";
import Exit from "./Exit";
import { ListTaskBlack, ListTaskWhite, CreateTaskBlack, CreateTaskWhite, AboutBlack, AboutWhite, ContactBlack, ContactWhite, ConfigBlack, ConfigWhite, ExitBlack, ExitWhite } from "../styles/Icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    const [isLoading, setIsLoading] = useState(true);
    const [onboardingShown, setOnboardingShown] = useState(null);
    const [isDrawerVisible, setIsDraweVisible] = useState(false);
    const childToParent = (childData) => { setIsDraweVisible(childData) };

    useEffect(() => {
        AsyncStorage.getItem('onboardingShown').then((value) => {
            if (value == null || value == '0') {
                setOnboardingShown(0);
            } else {
                setOnboardingShown(1);
            }
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <Text style={header}>...</Text>
            </View>
        );
    } else if (!isDrawerVisible && onboardingShown === 0) {
        return (
            <OnboardingScreen childToParent={childToParent} />
        );
    } else {
        return (
            // <View style={container}>
            //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            //         <Text style={{ fontFamily: 'VeniceClassic', color: 'rgb(46,46,56)', fontSize: 60 }}>Header</Text>
            //         <Text style={{ fontFamily: 'ZillaSlab-Medium', color: 'rgb(46,46,56)', fontSize: 18 }}>Body sample text</Text>
            //     </View>
            // </View>
            <Drawer.Navigator drawerPosition="left"
                screenOptions={{
                    drawerContentStyle:{
                        backgroundColor: Color.white,
                        marginBottom: 10
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
                        drawerIcon: () => <ExitBlack/>,
                        headerShown: false,
                    }}               
                />
            </Drawer.Navigator>
        );
    }
}