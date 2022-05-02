import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import { centered, container, linkIcon, linkText, paragraph } from "../styles/Containers";
import { GithubBlack } from "../styles/Icons";
import {  headerTitle, bodyInfo, bodyInfoItalic, bodyInfoBold } from "../styles/Typography";

export default function AboutScreen() {

    return (
        <ScrollView style={container}>
                <Text style={[paragraph, headerTitle]}>¿Qué es Todoom?</Text>
                <Text style={[paragraph, bodyInfo]}>
                    Todoom es la aplicación para anotar y ponerse al día con las tareas que tú, amante 
                    de los videojuegos y nostálgico de aquellas tardes frente a la recreativa, estabas 
                    esperando tener en tu móvil.
                </Text>
                <Text style={[paragraph, bodyInfo]}>
                    Tan sencillo como entrar en la app, pulsar el botón para crear una nueva tarea, 
                    rellenar toda la información que se necesite: una breve descripción, fecha y hora 
                    y ¡listo, ya tienes tu nueva tarea en la ventana principal! Eso sí, ¡olvides marcarla 
                    cuando termines!.
                </Text>
                <Text style={[paragraph, headerTitle]}>¿Por qué Todoom?</Text>
                <Text style={[paragraph, bodyInfo]}>
                    En efecto, el juego de palabras es horrible, pero oye, da en el clavo, ¿no?. La idea es 
                    combinar las típicas herramientas <Text style={bodyInfoItalic}>To-Do</Text> con un toque más 
                    a nuestro gusto, haciendo uso de elementos de estilo <Text style={bodyInfoItalic}>pixel art </Text>  
                    para dar esa temática distintiva del resto. ¡Y qué mejor cómplice para acompañar esta idea que 
                    un clásico por excelencia como es el videojuego <Text style={bodyInfoItalic}>Doom</Text>!.
                </Text>
                <Text style={[paragraph, headerTitle]}>¿Y quién soy yo?</Text>
                <Text style={[paragraph, bodyInfo]}>
                    ¿A quién se le ha podido ocurrir un chiste tan malo? ¡Pues a mi, Miguel!, un estudiante 
                    de Sevilla, España, que busca entrar de lleno en el mundo del desarrollo sin olvidar 
                    aquello que siempre le ha apasionado y acompañado en la vida, ¡los videojuegos!.
                </Text>
                <TouchableOpacity style={[centered, linkIcon]} onPress={() => Linking.openURL('https://github.com/miguelferlez/reactnative-todoom')}>
                    <GithubBlack/>
                    <Text style={[bodyInfoBold, linkText]}>Repositorio de la aplicación</Text>
                </TouchableOpacity>
                <View style={{marginBottom:45}} />
        </ScrollView>
    );
}