import {createSlice} from "@reduxjs/toolkit";
import {TaskProps} from "./Task";

export const taskSlice = createSlice({
    name: "task",
    initialState: {
        id: 0,
        title: "",
        content: "",
        award: "",
    } as TaskProps,
    reducers: {
        display: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});