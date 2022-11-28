import {sagaActionTypes} from "../../store/sagaActionTypes";
import {processException} from "../../utils/processException";
import {authenticatedFetch} from "../../utils/auth";
import {call, put, takeEvery} from "redux-saga/effects";
import {AnyAction} from "redux";
import {taskSlice} from "./slice";

export const taskDisplayAction = (id: number | string) => {
    return {
        type: sagaActionTypes.TASK_DISPLAY,
        payload: id
    };
};

export function* workerTaskDisplay(action:AnyAction): any {
    try {
        const task = yield call(authenticatedFetch, `/api/tasks/${action.payload}`);
        yield put(taskSlice.actions.display(task));
    } catch (e) {
        processException(e);
    }
}

export function* watchTaskDisplay() {
    yield takeEvery(sagaActionTypes.TASK_DISPLAY, workerTaskDisplay);
}