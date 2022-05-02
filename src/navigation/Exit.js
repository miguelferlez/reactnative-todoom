import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";
import { headerList } from "../styles/Typography";
import { centered } from "../styles/Containers";

export default function Exit() {

    useEffect(() => {
        BackHandler.exitApp();
    }, []);

    return (
        <View style={centered}>
            <Text style={headerList}>...</Text>
        </View>
    );
}