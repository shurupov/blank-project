import {put, takeEvery, select} from "redux-saga/effects";
import {sagaActionTypes} from "../../store/sagaActionTypes";
import {tasksListAction} from "../tasksList/saga";
import {logout} from "../../utils/auth";
import {taskDisplayAction} from "../task/saga";

export const pathSelector = (state: any) => state.router.location.pathname;
export const taskIdSelector = (state: any) => state.purchase.id;

export function* workerLocationChange(): any {
    const url = yield select(pathSelector);
    if (url == "/tasks") {
        yield put(tasksListAction());
    } else if (/^\/tasks\/\d+$/.test(url)) {
        const result = url.match(/^\/tasks\/(\d+)$/);
        const purchaseId = result[1];
        yield put(taskDisplayAction(purchaseId));
    } else if (/^\/tasks\/\d+$/.test(url)) {
        const result = url.match(/^\/tasks\/(\d+)$/);
        const storedTaskId = yield select(taskIdSelector);
        const taskId = result[1];
        if (taskId != storedTaskId) {
            yield put(taskDisplayAction(taskId));
        }
    } else if (url == "/logout") {
        console.log("/logout")
        logout();
    }
}

export function* watchLocationChange() {
    yield takeEvery(sagaActionTypes.LOCATION_CHANGE, workerLocationChange);
}

