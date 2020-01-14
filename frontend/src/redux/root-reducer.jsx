import {combineReducers} from 'redux';
import langReducer from './reducers/lang/lang.reducer';
import authReducer from './reducers/auth/auth.reducer';
import boardReducer from './reducers/board/board.reducer';

const rootReducer = combineReducers({
	lang: langReducer,
	auth: authReducer,
	board: boardReducer
});

export default rootReducer;