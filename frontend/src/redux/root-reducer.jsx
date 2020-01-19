import {combineReducers} from 'redux';
import langReducer from './reducers/lang/lang.reducer';
import authReducer from './reducers/auth/auth.reducer';
import boardReducer from './reducers/board/board.reducer';
import utilReducer from './reducers/util/util.reducer';

const rootReducer = combineReducers({
	lang: langReducer,
	auth: authReducer,
	board: boardReducer,
	util: utilReducer
});

export default rootReducer;