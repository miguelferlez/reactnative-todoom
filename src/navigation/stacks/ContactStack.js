import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactScreen from '../../containers/Contact';
import * as Color from '../../styles/Colors';
import { headerTitle } from '../../styles/Typography';
import { TouchableOpacity } from 'react-native';
import { BackBlack, BackWhite, DropDownBlack, DropDownWhite } from '../../styles/Icons';

const Stack = createNativeStackNavigator();

export default function ContactStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contáctanos" component={ContactScreen} 
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