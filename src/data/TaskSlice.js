import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    taskArray: []
}

export const TaskSlice = createSlice({
    name: 'taskArray',
    initialState,
    reducers:{
        setTaskReducer:(state, action) => {
            state.taskArray = action.payload;
        },
        updateTaskReducer:(state, action) => {
            state.taskArray = state.taskArray.map(item => {
                if (item.id === action.payload.id) {
                    item.isFinished = !item.isFinished;
                }
                return item;
            })
        },
        addTaskReducer:(state, action) => {
            state.taskArray.push(action.payload);
        },
        deleteTaskReducer:(state, action) => {
            const id = action.payload;
            state.taskArray = state.taskArray.filter(item => item.id !== id);
        },
        hideFinishedTask:(state) => {
            state.taskArray = state.taskArray.filter(item => !item.isFinished);
        },
        editTaskReducer:(state, action) => {
            state.taskArray = state.taskArray.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        item: action.payload.item
                    };
                }
                return task
            })
        },
    }
});

export const {setTaskReducer, updateTaskReducer, addTaskReducer, deleteTaskReducer, hideFinishedTask, editTaskReducer} = TaskSlice.actions;
export default TaskSlice.reducer;