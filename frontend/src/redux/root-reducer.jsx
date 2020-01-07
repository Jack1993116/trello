import {combineReducers} from 'redux';
import langReducer from './reducers/lang/lang.reducer';

const rootReducer = combineReducers({
	lang: langReducer
});

export default rootReducer;