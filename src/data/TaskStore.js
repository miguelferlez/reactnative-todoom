import taskReducer from './TaskSlice';
import { configureStore } from '@reduxjs/toolkit';

export const TaskStore = configureStore({
    reducer: {
        taskArray: taskReducer,
    }
})