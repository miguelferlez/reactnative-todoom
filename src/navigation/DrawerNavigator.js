import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OnboardingScreen from '../containers/Onboarding'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { header } from "../styles/Typography";
import { container } from "../styles/Containers";

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
            <View style={container}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'VeniceClassic', color: 'rgb(46,46,56)', fontSize: 60 }}>Header</Text>
                    <Text style={{ fontFamily: 'ZillaSlab-Medium', color: 'rgb(46,46,56)', fontSize: 18 }}>Body sample text</Text>
                </View>
            </View>
        );
    }
}