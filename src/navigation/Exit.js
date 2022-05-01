import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";
import { header } from "../styles/Typography";
import { centered } from "../styles/Containers";

export default function Exit() {

    useEffect(() => {
        BackHandler.exitApp();
    }, []);

    return (
        <View style={centered}>
            <Text style={header}>...</Text>
        </View>
    );
}