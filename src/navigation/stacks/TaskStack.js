import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Color from '../../styles/Colors';
import { headerTitle } from '../../styles/Typography';
import ListTaskScreen from '../../containers/ListTask';
import CreateTaskScreen from '../../containers/CreateTask';
import EditTaskScreen from '../../containers/EditTask';
import { TouchableOpacity } from 'react-native';
import { BackBlack, BackWhite, DropDownBlack, DropDownWhite } from '../../styles/Icons';

const Stack = createNativeStackNavigator();

export default function TaskStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='Mis tareas'>
            <Stack.Screen name="Mis tareas" component={ListTaskScreen}
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
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <DropDownBlack />
                            </TouchableOpacity>
                        );
                    },
                }}
            />
            <Stack.Screen name="Añadir tareas" component={CreateTaskScreen}
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
            <Stack.Screen name="Editar tareas" component={EditTaskScreen}
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