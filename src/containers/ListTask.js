import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, RefreshControl } from "react-native";
import { button, buttonDarkMode, centered, container, containerDarkMode, paragraph, addButton, addButtonDarkMode } from "../styles/Containers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { body, bodyDarkMode, headerList, headerListDarkMode } from "../styles/Typography";
import CheckBox from "../styles/CheckBox";
import { setTaskReducer } from "../data/TaskSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ListTaskScreen({ navigation, route }) {

    const [isLoading, setIsLoading] = useState(true);
    const [taskHidden, setTaskHidden] = useState(false);
    const [colorScheme, setColorScheme] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const taskStored = useSelector(state => state.taskArray.taskArray);
    const dispatch = useDispatch();
    const wait = (timeout) => { return new Promise(resolve => setTimeout(resolve, timeout)); }
    
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false), getTasks());
    }, []);

    useEffect(() => {
        AsyncStorage.getItem('isDarkMode').then((value) => {
            if (value == null || value == '0') {
                setColorScheme('light');
            } else {
                setColorScheme('dark');
            }
        }).then(setIsLoading(false));
        getTasks();
    }, []);

    const getTasks = async () => {
        try{
            const tasks = await AsyncStorage.getItem('task');
            if(tasks !== null) {
                dispatch(setTaskReducer(JSON.parse(tasks)));
            }
        }catch (error) {
            console.log(error);
        }
    };    

    const hideTask = () => {
        if (taskHidden) {
            setTaskHidden(false);
        }
        setTaskHidden(!taskHidden);
    };

    if (isLoading) {
        return (
            <View style={colorScheme === 'light' ? [container,centered] : [containerDarkMode,centered]}>
                <Text style={colorScheme === 'light' ? body : bodyDarkMode}>Cargando...</Text>
            </View>
        );
    } else {
        return (
            <View style={colorScheme === 'light' ? container : containerDarkMode}>
                <FlatList
                    data={taskStored.filter(item => taskHidden ? !item.isFinished : item)}
                    keyExtractor={ item => item.id }
                    renderItem={ ({item}) => 
                        <View>
                            <Text style={colorScheme === 'light' ? [headerList, paragraph] : [headerListDarkMode, paragraph]}>{item.date}</Text>
                            <CheckBox id={item.id} isFinished={item.isFinished} text={item.text} hour={item.hour} date={item.date} navigation={navigation} /> 
                        </View>
                    }
                    ListHeaderComponent={
                        <View>
                            <TouchableOpacity onPress={hideTask} style={colorScheme === 'light' ? [button,centered,paragraph] : [buttonDarkMode,centered,paragraph]}>
                                <Text style={colorScheme === 'light' ? bodyDarkMode : body}>{taskHidden ? 'Mostrar todas las tareas completadas' : 'Ocultar todas las tareas completadas'}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }   
                />
                <View style={{flex:1,position:'absolute',alignSelf:'flex-end',bottom: 22,paddingRight:22}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Añadir tareas')} style={colorScheme === 'light' ? addButton : addButtonDarkMode}>
                        <Text style={colorScheme === 'light' ? [headerListDarkMode,centered] : [headerList,centered]}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}