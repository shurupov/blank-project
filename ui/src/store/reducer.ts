import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {tasksListSlice} from "../components/tasksList/slice";
import {taskSlice} from "../components/task/slice";

export const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    tasksList: tasksListSlice.reducer,
    task: taskSlice.reducer,
});