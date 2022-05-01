import React from "react";
import { View, Text } from "react-native";
import { container } from "../styles/Containers";
import * as Typography from '../styles/Typography';

export default function ConfigScreen() {

    return (
        <View style={container}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={Typography.body}>Configuration screen!</Text>
            </View>
        </View>
    );
}