import {createSlice} from "@reduxjs/toolkit";
import {TaskProps} from "./Task";

export const taskSlice = createSlice({
    name: "task",
    initialState: {
        id: 0,
        name: "",
        description: "",
        createdAt: "",
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