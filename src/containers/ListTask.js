import React from "react";
import { View, Text } from "react-native";
import { container } from "../styles/Containers";
import * as Typography from '../styles/Typography';

export default function ListTaskScreen() {

    return (
        <View style={container}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={Typography.body}>List task screen!</Text>
            </View>
        </View>
    );
}