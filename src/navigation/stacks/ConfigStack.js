import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfigScreen from '../../containers/Config';
import * as Color from '../../styles/Colors';
import { headerTitle } from '../../styles/Typography';
import { TouchableOpacity } from 'react-native';
import { BackBlack, BackWhite, DropDownBlack, DropDownWhite } from '../../styles/Icons';

const Stack = createNativeStackNavigator();

export default function ConfigStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Configuración" component={ConfigScreen} 
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