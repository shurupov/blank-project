import {call, put, takeEvery} from "redux-saga/effects";
import {sagaActionTypes} from "../../store/sagaActionTypes";
import {tasksListSlice} from "./slice";
import {extendedFetch} from "../../utils/auth";
import {processException} from "../../utils/processException";

export const tasksListAction = () => {
    return {
        type: sagaActionTypes.TASK_LIST,
    };
};

export function* workerTasksList(): any {
    try {
        const tasks = yield call(extendedFetch, "/api/tasks");
        yield put(tasksListSlice.actions.list(tasks));
    } catch (e) {
        processException(e);
    }
}

export function* watchTasksList() {
    yield takeEvery(sagaActionTypes.TASK_LIST, workerTasksList);
}