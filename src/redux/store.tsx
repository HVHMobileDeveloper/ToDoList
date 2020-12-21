import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from 'redux';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore(initialState?: any) {
    const store = createStore(reducers, initialState, compose(applyMiddleware(...middlewares)));

    sagaMiddleware.run(sagas);

    return store;
}
