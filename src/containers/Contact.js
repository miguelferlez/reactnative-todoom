import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import { beginning, container, linkIcon, linkText, paragraph } from "../styles/Containers";
import { headerTitle, bodyInfo, bodyInfoBold } from "../styles/Typography";
import { MailBlack, MailWhite, PhoneBlack, PhoneWhite, TwitterBlack, TwitterWhite } from '../styles/Icons'

export default function ContactScreen() {
    return (
        <ScrollView style={container}>
            <Text style={[paragraph, bodyInfo]}>
                ¿Necesitas preguntar o compartir algo acerca de la aplicación?
                Aquí tienes las líneas de comunicación disponibles para hacerlo:
            </Text>
            <Text style={[paragraph, headerTitle]}>Contacto</Text>
            <View style={[beginning, linkIcon, paragraph]}>
                <MailBlack />
                <Text style={[bodyInfo, linkText]}>miguelferlez@gmail.com</Text>
            </View>
            <View style={[beginning, linkIcon, paragraph]}>
                <PhoneBlack />
                <Text style={[bodyInfo, linkText]}>+34 636 89 01 35</Text>
            </View>
            <Text style={[paragraph, headerTitle]}>Redes sociales</Text>
            <TouchableOpacity style={[beginning, linkIcon, paragraph]} onPress={() => Linking.openURL('https://twitter.com/migmcfrln')}>
                <TwitterBlack />
                <Text style={[bodyInfoBold, linkText]}>@migmcfrln</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}