import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Color from './Colors';
import { paragraphTask } from './Containers';
import { body, bodyDarkMode, subBody, subBodyDarkMode } from './Typography';
import { deleteTaskReducer, updateTaskReducer } from '../data/TaskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { MenuTaskBlack, MenuTaskWhite } from './Icons';


export default function CheckBox({ id, isFinished, text, hour, date, navigation }) {

    const [colorScheme, setColorScheme] = useState(null);
    const taskStored = useSelector(state => state.taskArray.taskArray);
    const dispatch = useDispatch();
    const setIsFinished = () => {
        try {
            dispatch(updateTaskReducer({ id, isFinished }));
            AsyncStorage.setItem('task', JSON.stringify(
                taskStored.map(item => {
                    if (item.id === id) {
                        return { ...taskStored, id: Math.floor(Math.random()*1000), isFinished: !isFinished, text: text, hour: hour, date: date }
                    }
                    return item;
                })
            ));
        } catch (error) {
            console.log(error);
        }
    }
    const setIsDeleted = async () => {
        dispatch(deleteTaskReducer(id));
        try {
            await AsyncStorage.setItem('task', JSON.stringify(
                taskStored.filter(item => item.id !== id)
            ));
        } catch (error) {
            console.log(error);
        }
    }

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
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '70%' }}>
                <TouchableOpacity onPress={setIsFinished}>
                    <Icon
                        size={25}
                        color={colorScheme === 'light' ? Color.blackRaisin : Color.white}
                        name={isFinished ? 'check-circle' : 'radio-button-unchecked'}
                    />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={colorScheme === 'light' ? isFinished ? [subBody, { textDecorationLine: 'line-through' }] : body : isFinished ? [subBodyDarkMode, { textDecorationLine: 'line-through' }] : bodyDarkMode}>{text}</Text>
                    <Text style={colorScheme === 'light' ? isFinished ? [subBody, { textDecorationLine: 'line-through' }] : subBody : isFinished ? [subBodyDarkMode, { textDecorationLine: 'line-through' }] : subBodyDarkMode}>{hour}</Text>
                </View>
            </View>
            <View style={{ marginRight: 0, width: '28%' }}>
                <Menu>
                    <MenuTrigger>
                        {colorScheme === 'light' ? <MenuTaskBlack /> : <MenuTaskWhite />}
                    </MenuTrigger>
                    <MenuOptions style={colorScheme === 'light' ? { backgroundColor: Color.white, padding: 10 } : { backgroundColor: Color.blackRaisin, padding: 10 }}>
                        <MenuOption onSelect={() => {
                            setIsDeleted(); navigation.navigate('Editar tareas', {
                                text: text,
                                hour: hour,
                                date: date,
                            })
                        }}>
                            <Text style={colorScheme === 'light' ? body : bodyDarkMode}>Editar tarea</Text>
                        </MenuOption>
                        <MenuOption onSelect={setIsDeleted} >
                            <Text style={colorScheme === 'light' ? body : bodyDarkMode}>Eliminar tarea</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        </View>
    )
}