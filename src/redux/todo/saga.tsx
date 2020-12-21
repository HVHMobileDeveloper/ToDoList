import {all, fork, put, takeLatest} from 'redux-saga/effects';

function* watchSetAddTodo() {

}

export default function* rootSaga() {
    yield all([fork(watchSetAddTodo)]);
}
