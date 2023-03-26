import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducre';

const log=createLogger();
export const Store=createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        log
    )
)