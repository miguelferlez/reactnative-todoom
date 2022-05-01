import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onboardingTouchableLeft, onboardingTouchableRight } from '../styles/Containers'
import { body, headerOnboarding } from "../styles/Typography";
import * as Color from '../styles/Colors';

export default function OnboardingScreen({ childToParent }) {
    const Dots = ({ selected }) => {
        let backgroundColor;
        backgroundColor = selected ? Color.blackRaisin : Color.greyLight
        return (
            <View style={{
                width: 6,
                height: 6,
                borderRadius: 10,
                marginHorizontal: 8,
                backgroundColor
            }} />
        )
    };
    const SkipButton = ({ ...props }) => (
        <TouchableOpacity {...props} style={onboardingTouchableLeft}>
            <Text style={body}>Saltar</Text>
        </TouchableOpacity>
    );
    const NextButton = ({ ...props }) => (
        <TouchableOpacity {...props} style={onboardingTouchableRight}>
            <Text style={body}>Siguiente</Text>
        </TouchableOpacity>
    );
    const DoneButton = ({ ...props }) => (
        <TouchableOpacity {...props} style={onboardingTouchableRight}>
            <Text style={body}>Entendido</Text>
        </TouchableOpacity>
    );

    return (
        <Onboarding
            containerStyles={{
                alignSelf: 'center',
            }}
            titleStyles={{
                ...headerOnboarding,
                textAlign: 'center',
                marginTop: -25,
                marginHorizontal: 20,                
            }}
            subTitleStyles={{
                ...body,
                textAlign: 'left',
                marginTop: 15,                
                marginHorizontal: 10,
            }}
            bottomBarColor={Color.white}
            SkipButtonComponent={SkipButton}
            NextButtonComponent={NextButton}
            DoneButtonComponent={DoneButton}
            DotComponent={Dots}

            onSkip={() => {
                childToParent(true);
                AsyncStorage.setItem('onboardingShown', '1');
            }}
            onDone={() => {
                childToParent(true);
                AsyncStorage.setItem('onboardingShown', '1');
            }}

            pages={
                [
                    {
                        backgroundColor: Color.white,
                        image: <Image source={require('../assets/images/onboarding-page1.png')} />,
                        title: '¿Una tarea salvaje apareció?',
                        subtitle: 'Sólo tienes que anotar aquello que tengas pendiente, elegir la fecha en la que lo vayas a terminar y ¡listo!'
                    },
                    {
                        backgroundColor: Color.white,
                        image: <Image source={require('../assets/images/onboarding-page2.png')} />,
                        title: 'Añádelas en un instante',
                        subtitle: 'Crea tus tareas con solo pulsar el botón que aparece en la pantalla principal.'
                    },
                    {
                        backgroundColor: Color.white,
                        image: <Image source={require('../assets/images/onboarding-page3.png')} />,
                        title: 'Unas letras por aquí y otra fecha por allá...',
                        subtitle: 'Rellenar la información necesaria, elegir un día y guardar, ¡así de sencillo!'
                    },
                    {
                        backgroundColor: Color.white,
                        image: <Image source={require('../assets/images/onboarding-page4.png')} />,
                        title: 'Y cuando las termines ¡adiós tareas!',
                        subtitle: 'No olvides descartarlas en la pantalla principal cuando las hayas acabado.'
                    }
                ]
            }
        />
    )
}