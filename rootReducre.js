import {combineReducers} from 'redux'
import alertreducers from './AlertReducer';
import loaderreducers from './LoaderReducer';

const rootReducer=combineReducers({
    alertreducers,
    loaderreducers
})
export default rootReducer;