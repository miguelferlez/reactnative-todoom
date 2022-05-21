import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { paragraph, container, containerDarkMode, centered, normalField, linkIcon, linkText, button, buttonDarkMode } from "../styles/Containers";
import { headerTitle, headerTitleDarkMode, body, bodyDarkMode } from "../styles/Typography";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNRestart from 'react-native-restart';
import { DarkModeWhite, DarkModeBlack, LightModeWhite, LightModeBlack } from "../styles/Icons";

export default function ConfigScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [colorScheme, setColorScheme] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('isDarkMode').then((value) => {
            if (value == null || value == '0') {
                setColorScheme('light');
            } else {
                setColorScheme('dark');
            }
        }).then(setIsLoading(false));
    }, []);

    useEffect(() => {
        if (colorScheme === 'light' || colorScheme === null) {
            AsyncStorage.setItem('isDarkMode', '0');
        } else {
            AsyncStorage.setItem('isDarkMode', '1');
        }
    }, [colorScheme]);

    if (isLoading) {
        return (
            <View style={colorScheme === 'light' ? [container, centered] : [containerDarkMode, centered]}>
                <Text style={colorScheme === 'light' ? body : bodyDarkMode}>Cargando...</Text>
            </View>
        );
    } else {
        return (
            <ScrollView style={colorScheme === 'light' ? container : containerDarkMode}>
                <Text style={colorScheme === 'light' ? [headerTitle, paragraph] : [headerTitleDarkMode, paragraph]}>Diseño</Text>
                <View style={[paragraph, normalField]}>
                    <Text style={colorScheme === 'light' ? body : bodyDarkMode}>Tema: </Text>
                    <TouchableOpacity onPress={() => { setIsLoading(true); colorScheme === 'dark' ? setColorScheme('light') : setColorScheme('dark'); RNRestart.Restart(); }} style={colorScheme === 'light' ? [linkIcon, button, { marginLeft: 10 }] : [linkIcon, buttonDarkMode, { marginLeft: 10 }]}>
                        {colorScheme === 'light' ? <LightModeWhite /> : <DarkModeBlack />}
                        <Text style={colorScheme === 'light' ? [bodyDarkMode, linkText] : [body, linkText]}>{colorScheme === 'light' ? 'Modo claro' : 'Modo oscuro'}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}