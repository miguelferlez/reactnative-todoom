import React, { useEffect, useState } from "react";
import { View, Text, BackHandler } from "react-native";
import { body, bodyDarkMode } from "../styles/Typography";
import { centered, container, containerDarkMode } from "../styles/Containers";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Exit() {

    const [colorScheme, setColorScheme] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('isDarkMode').then((value) => {
            if (value == null || value == '0') {
                setColorScheme('light');
            } else {
                setColorScheme('dark');
            }
        });
        BackHandler.exitApp();
    }, []);

    return (
        <View style={colorScheme === 'light' ? [container, centered] : [containerDarkMode, centered]}>
            <Text style={colorScheme === 'light' ? bodyDarkMode : body}>Saliendo...</Text>
        </View>
    );
}