import {all, fork, put, takeLatest} from 'redux-saga/effects';

import {PUSH_ADD_TODO, SET_ADD_TODO} from '../../constant/variable';

import {ActionTodoType} from './reducer';

function* watchSetAddTodo() {
    yield takeLatest(SET_ADD_TODO, function* (action: ActionTodoType) {
        yield put({
            type: PUSH_ADD_TODO,
            payload: {
                todo: action.payload.todo,
            },
        });
    });
}

export default function* rootSaga() {
    yield all([fork(watchSetAddTodo)]);
}
