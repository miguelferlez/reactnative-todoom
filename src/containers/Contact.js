import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import { beginning, centered, container, containerDarkMode, linkIcon, linkText, paragraph } from "../styles/Containers";
import { headerTitle, bodyInfo, bodyInfoBold, bodyDarkMode, body, bodyInfoDarkMode, headerTitleDarkMode, bodyInfoBoldDarkMode } from "../styles/Typography";
import { MailBlack, MailWhite, PhoneBlack, PhoneWhite, TwitterBlack, TwitterWhite } from '../styles/Icons'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ContactScreen() {
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

    if (isLoading) {
        return (
            <View style={colorScheme === 'light' ? [container, centered] : [containerDarkMode, centered]}>
                <Text style={colorScheme === 'light' ? body : bodyDarkMode}>Cargando...</Text>
            </View>
        );
    } else {
        return (
            <ScrollView style={colorScheme === 'light' ? container : containerDarkMode}>
                <Text style={colorScheme === 'light' ? [paragraph, bodyInfo] : [paragraph, bodyInfoDarkMode]}>
                    ¿Necesitas preguntar o compartir algo acerca de la aplicación?
                    Aquí tienes las líneas de comunicación disponibles para hacerlo:
                </Text>
                <Text style={colorScheme === 'light' ? [paragraph, headerTitle] : [paragraph, headerTitleDarkMode]}>Contacto</Text>
                <View style={[beginning, linkIcon, paragraph]}>
                    {colorScheme === 'light' ? <MailBlack /> : <MailWhite />}
                    <Text style={colorScheme === 'light' ? [bodyInfo, linkText] : [bodyInfoDarkMode, linkText]}>miguelferlez@gmail.com</Text>
                </View>
                <View style={[beginning, linkIcon, paragraph]}>
                    {colorScheme === 'light' ? <PhoneBlack /> : <PhoneWhite />}
                    <Text style={colorScheme === 'light' ? [bodyInfo, linkText] : [bodyInfoDarkMode, linkText]}>+34 636 89 01 35</Text>
                </View>
                <Text style={colorScheme === 'light' ? [paragraph, headerTitle] : [paragraph, headerTitleDarkMode]}>Redes sociales</Text>
                <TouchableOpacity style={[beginning, linkIcon, paragraph]} onPress={() => Linking.openURL('https://twitter.com/migmcfrln')}>
                    {colorScheme === 'light' ? <TwitterBlack /> : <TwitterWhite />}
                    <Text style={colorScheme === 'light' ? [bodyInfoBold, linkText] : [bodyInfoBoldDarkMode, linkText]}>@migmcfrln</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}