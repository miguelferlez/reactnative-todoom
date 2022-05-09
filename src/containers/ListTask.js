import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, RefreshControl } from "react-native";
import { button, buttonDarkMode, centered, container, containerDarkMode, paragraph, addButton, addButtonDarkMode } from "../styles/Containers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { body, bodyDarkMode, headerList, headerListDarkMode } from "../styles/Typography";
import { tasks } from "./ListData";
import CheckBox from "../styles/CheckBox";

export default function ListTaskScreen({ navigation, route }) {

    const [isLoading, setIsLoading] = useState(true);
    const [taskHidden, setTaskHidden] = useState(false);
    const [colorScheme, setColorScheme] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [taskDateHeader, setTaskDateHeader] = useState([]);

    // const checkDate = (item) => {
    //     var flag = false;
    //     for(let i = 0; i < tasks.length; i++){
    //         console.log('taks['+i+'].date:',tasks[i].date);
    //         console.log('item:',item);
    //         if(i === 0){
    //             continue;
    //         }
    //         else if(item === tasks[i].date){
    //             flag = true;
    //             break;
    //         }else{
    //             flag = false;
    //         }
    //     }
    //     console.log('flag:',flag);
    //     if(flag === true){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    const hideTask = () => {
        if (taskHidden) {
            setTaskHidden(false);
        }
        setTaskHidden(!taskHidden);
    };

    useEffect(() => {
        AsyncStorage.getItem('isDarkMode').then((value) => {
            if (value == null || value == '0') {
                setColorScheme('light');
            } else {
                setColorScheme('dark');
            }
            setIsLoading(false);
        });
    }, []);

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
                    data={tasks.filter(item => taskHidden ? !item.isFinished : item)}
                    keyExtractor={ item => item.id }
                    renderItem={ ({item}) => 
                        <View>
                            <Text style={colorScheme === 'light' ? [headerList, paragraph] : [headerListDarkMode, paragraph]}>{item.date}</Text>
                            <CheckBox checked={item.isFinished} text={item.text} hour={item.hour} /> 
                        </View>
                    }
                    ListHeaderComponent={
                        <View>
                            <TouchableOpacity onPress={hideTask} style={colorScheme === 'light' ? [button,centered,paragraph] : [buttonDarkMode,centered,paragraph]}>
                                <Text style={colorScheme === 'light' ? bodyDarkMode : body}>{taskHidden ? 'Mostrar todas las tareas completadas' : 'Ocultar todas las tareas completadas'}</Text>
                            </TouchableOpacity>
                            {/* <Text style={colorScheme === 'light' ? [headerList, paragraph] : [headerListDarkMode, paragraph]}>Hoy</Text> */}
                        </View>
                    }   
                />
                <View style={{flex:1,position:'absolute',alignSelf:'flex-end',bottom: 22,paddingRight:22}}>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateTask')} style={colorScheme === 'light' ? addButton : addButtonDarkMode}>
                        <Text style={colorScheme === 'light' ? [headerListDarkMode,centered] : [headerList,centered]}>+</Text>
                    </TouchableOpacity>
                </View>
                {/* <SectionList
                    sections={taskSection.reduce((result, sectionData) => {
                        const {title, data} = sectionData;
                        const filteredData = data.filter(item => taskHidden ? !item.isFinished : item);
                        if (filteredData.length !== 0) {
                            result.push({
                                title,
                                data: filteredData
                            });
                        }
                        return result;
                    }, [])}
                    keyExtractor={ (item, index) => index.toString() }
                    renderItem={ ({item}) =>
                        <View>
                            <CheckBox checked={item.isFinished} text={item.text} hour={item.hour} />
                        </View>
                    }
                    renderSectionHeader={({ section: { title } }) => (<Text style={colorScheme === 'light' ? [headerList, paragraph] : [headerListDarkMode, paragraph]}>{title}</Text>)}
                    ListHeaderComponent={ () => 
                        <TouchableOpacity onPress={hideTask} style={colorScheme === 'light' ? [button,{alignSelf:'flex-end'}] : [buttonDarkMode,{alignSelf:'flex-end'}]}>
                            <Text style={colorScheme === 'light' ? bodyDarkMode : body}>{taskHidden ? 'Mostrar tareas terminadas' : 'Ocultar tareas terminadas'}</Text>
                        </TouchableOpacity>
                    }
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                />
                <View style={{flex:1,position:'absolute',alignSelf:'flex-end',bottom: 22,paddingRight:22}}>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateTask')} style={colorScheme === 'light' ? addButton : addButtonDarkMode}>
                        <Text style={colorScheme === 'light' ? [headerListDarkMode,centered] : [headerList,centered]}>+</Text>
                    </TouchableOpacity>
                </View> */}

            </View>
        );
    }
}