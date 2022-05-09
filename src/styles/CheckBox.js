import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Color from './Colors';
import { paragraphTask } from './Containers';
import { body, bodyDarkMode, subBody, subBodyDarkMode } from './Typography';

export default function CheckBox({ checked, text, hour }) {

    const [colorScheme, setColorScheme] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('isDarkMode').then((value) => {
            if (value == null || value == '0') {
                setColorScheme('light');
            } else {
                setColorScheme('dark');
            }
        })
    }, []);

    return (
        <View style={[paragraphTask]}>
            <TouchableOpacity>
                <Icon 
                    size={25}
                    color={colorScheme === 'light' ? Color.blackRaisin : Color.white }
                    name={checked ? 'check-circle' : 'radio-button-unchecked'}
                />
            </TouchableOpacity>
            <View style={{marginHorizontal:10}}>
                <Text style={[colorScheme === 'light' ? checked ? [subBody,{textDecorationLine:'line-through'}] : body : checked ? [subBodyDarkMode,{textDecorationLine:'line-through'}] : bodyDarkMode]}>{text}</Text>
                <Text style={colorScheme === 'light' ? checked ? [subBody,{textDecorationLine:'line-through'}] : subBody : checked ? [subBodyDarkMode,{textDecorationLine:'line-through'}] : subBodyDarkMode}>{hour}</Text>
            </View>
        </View>
    )
}