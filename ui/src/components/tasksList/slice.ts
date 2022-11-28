import {createSlice} from "@reduxjs/toolkit";

export const tasksListSlice = createSlice({
    name: "tasksList",
    initialState: {
        list: [],
    },
    reducers: {
        list: (state, action) => {
            return {
                ...state,
                list: action.payload
            }
        },
    }
});