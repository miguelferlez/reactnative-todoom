import React, { useState, useEffect } from "react";
import { View, Text, Appearance } from "react-native";
import { centered, container, containerDarkMode } from "../styles/Containers";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { body, bodyDarkMode } from "../styles/Typography";

export default function ListTaskScreen() {

    const [isLoading, setIsLoading] = useState(true);
    const [colorScheme, setColorScheme] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('isDarkMode').then((value) => {
            if (value == null || value == '0') {
                setColorScheme('light');
            } else {
                setColorScheme('dark');
            }
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return (
            <View style={colorScheme === 'light' ? [container,centered] : [containerDarkMode,centered]}>
                <Text style={colorScheme === 'light' ? body : bodyDarkMode}>Cargando...</Text>
            </View>
        );
    } else {
        return (
            <View style={colorScheme === 'light' ? container : containerDarkMode}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={colorScheme === 'light' ? body : bodyDarkMode}>List task screen!</Text>
                </View>
            </View>
        );
    }
}