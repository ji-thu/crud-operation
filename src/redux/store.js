import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './task'

export const store = configureStore({
    reducer:{
        taskReducers: taskSlice
    }
})