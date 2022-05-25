import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Switch } from "react-native";
import { button, buttonDarkMode, buttonDisabled, buttonDisabledDarkMode, centered, container, containerDarkMode, normalField, paragraph, taskTextInput, taskTextInputDarkMode } from "../styles/Containers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { body, bodyDarkMode, subBody, subBodyDarkMode } from "../styles/Typography";
import * as Color from '../styles/Colors';
import DateTimePicker from "react-native-modal-datetime-picker";
import { useDispatch, useSelector } from "react-redux";
import { addTaskReducer } from "../data/TaskSlice";

export default function CreateTaskScreen({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);
    const [colorScheme, setColorScheme] = useState(null);
    const [text, setText] = useState('');
    const [hour, setHour] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [isToday, setIsToday] = useState(true);
    const [isHourPickerVisible, setIsHourPickerVisible] = useState(false);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
    const [isDatePickerDisabled, setIsDatePickerDisabled] = useState(true);
    const dispatch = useDispatch();
    const taskStored = useSelector(state => state.taskArray.taskArray);
    const today = new Date();

    useEffect(() => {
        AsyncStorage.getItem('isDarkMode').then((value) => {
            if (value == null || value == '0') {
                setColorScheme('light');
            } else {
                setColorScheme('dark');
            }
        }).then(setIsLoading(false));
    }, []);

    useEffect(() => {
        if (!text.trim()) {
            setIsSaveButtonDisabled(true);
        } else {
            setIsSaveButtonDisabled(false);
        }
    }, [text]);

    //Hour
    const showHourPicker = () => {
        setIsHourPickerVisible(true);
    };

    const hideHourPicker = () => {
        setIsHourPickerVisible(false);
    };

    const handleConfirmHour = (hour) => {
        setHour(hour);
        hideHourPicker();
        hideDatePicker();
    };

    //Date
    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    };

    const handleConfirmDate = (date) => {
        setDate(date);
        hideHourPicker();
        hideDatePicker();
    };

    const createTask = async () => {
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            text: text,
            hour: hour.getMinutes() < 10 ? hour.getHours() < 10 ? '0' + hour.getHours() + ':0' + hour.getMinutes() : hour.getHours() + ':0' + hour.getMinutes() : hour.getHours() + ':' + hour.getMinutes(),
            date: date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear() ? 'Hoy' : date.getDate() === today.getDate() + 1 && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear() ? 'Mañana' : date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
            isFinished: false
        }
        try {
            await AsyncStorage.setItem('task', JSON.stringify([...taskStored, newTask]));
            dispatch(addTaskReducer(newTask));
            navigation.navigate('Mis tareas');
        } catch (error) {
            console.log(error);
        }
    }

    if (isLoading) {
        return (
            <View style={colorScheme === 'light' ? [container, centered] : [containerDarkMode, centered]}>
                <Text style={colorScheme === 'light' ? body : bodyDarkMode}>Cargando...</Text>
            </View>
        );
    } else {
        return (
            <ScrollView style={colorScheme === 'light' ? container : containerDarkMode}>
                <View style={[paragraph, normalField]}>
                    <Text style={colorScheme === 'light' ? body : bodyDarkMode}>Título: </Text>
                    <TextInput
                        style={colorScheme === 'light' ? taskTextInput : taskTextInputDarkMode}
                        placeholder="Escribe lo que tengas pendiente"
                        placeholderTextColor={colorScheme === 'light' ? Color.greyLight : Color.greyScript}
                        onChangeText={(value) => { setText(value) }}
                    />
                </View>
                <View style={[paragraph, normalField]}>
                    <Text style={colorScheme === 'light' ? body : bodyDarkMode}>¿A qué hora? </Text>
                    <TouchableOpacity onPress={showHourPicker} style={colorScheme === 'light' ? [button, { flex: 1, marginLeft: 15 }] : [buttonDarkMode, { flex: 1, marginLeft: 15 }]}>
                        <Text style={colorScheme === 'light' ? bodyDarkMode : body}>{hour.getMinutes() < 10 ? hour.getHours() < 10 ? '0' + hour.getHours() + ':0' + hour.getMinutes() : hour.getHours() + ':0' + hour.getMinutes() : hour.getHours() + ':' + hour.getMinutes()}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={isHourPickerVisible}
                        value={hour}
                        mode={'time'}
                        is24Hour={true}
                        onConfirm={handleConfirmHour}
                        onCancel={hideHourPicker}
                    />
                </View>
                <View style={[paragraph, normalField]}>
                    <Text style={colorScheme === 'light' ? body : bodyDarkMode}>¿Para hoy?</Text>
                    <Switch
                        value={isToday}
                        onValueChange={(value) => { setIsToday(value), setIsDatePickerDisabled(value) }}
                        trackColor={{ true: colorScheme === 'light' ? Color.greyLight : Color.greyScript, false: colorScheme === 'light' ? Color.blackRaisin : Color.white }}
                        thumbColor={Color.white}
                        style={{ marginLeft: 15, transform: [{ scale: 1.5 }] }}
                    />
                </View>
                <View style={[paragraph, normalField]}>
                    <Text style={colorScheme === 'light' ? isDatePickerDisabled ? subBody : body : isDatePickerDisabled ? subBodyDarkMode : bodyDarkMode}>Fecha: </Text>
                    <TouchableOpacity disabled={isDatePickerDisabled} onPress={showDatePicker} style={colorScheme === 'light' ? isDatePickerDisabled ? [buttonDisabled, { flex: 1, marginLeft: 15 }] : [button, { flex: 1, marginLeft: 15 }] : isDatePickerDisabled ? [buttonDisabledDarkMode, { flex: 1, marginLeft: 15 }] : [buttonDarkMode, { flex: 1, marginLeft: 15 }]}>
                        <Text style={colorScheme === 'light' ? bodyDarkMode : body}>{date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={isDatePickerVisible}
                        value={date}
                        mode={'date'}
                        onConfirm={handleConfirmDate}
                        onCancel={hideDatePicker}
                    />
                </View>
                <TouchableOpacity onPress={createTask} disabled={!text} style={colorScheme === 'light' ? isSaveButtonDisabled ? [centered, buttonDisabled, { marginTop: 10, width: '100%' }] : [centered, button, { marginTop: 10, width: '100%' }] : isSaveButtonDisabled ? [centered, buttonDisabledDarkMode, { marginTop: 10, width: '100%' }] : [centered, buttonDarkMode, { marginTop: 10, width: '100%' }]} >
                    <Text style={colorScheme === 'light' ? bodyDarkMode : body}>Guardar tarea</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}