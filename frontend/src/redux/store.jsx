import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware,logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;