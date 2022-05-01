import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../../containers/About';
import * as Color from '../../styles/Colors';
import { headerTitle } from '../../styles/Typography';
import { TouchableOpacity } from 'react-native';
import { BackBlack, BackWhite, DropDownBlack, DropDownWhite } from '../../styles/Icons';

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Sobre nosotros" component={AboutScreen} 
                options={{
                    headerTitleAlign: 'center', 
                    headerStyle: { 
                        backgroundColor: Color.white 
                    }, 
                    headerTitleStyle: {
                        ...headerTitle,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Mis tareas')}>
                                <BackBlack />
                            </TouchableOpacity>
                        );
                    },
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <DropDownBlack />
                            </TouchableOpacity>
                        );
                    },                  
                }} 
            />
        </Stack.Navigator>
    )
}