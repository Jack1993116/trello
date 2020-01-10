import {combineReducers} from 'redux';
import langReducer from './reducers/lang/lang.reducer';
import authReducer from './reducers/auth/auth.reducer';

const rootReducer = combineReducers({
	lang: langReducer,
	auth: authReducer
});

export default rootReducer;