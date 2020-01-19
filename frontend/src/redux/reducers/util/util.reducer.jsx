import UtilActionTypes from './util.action.type';

const INIT_STATE = {
	create: false,
	createT: false
}

const utilReducer = (state=INIT_STATE, action) => {
	switch(action.type){
		case UtilActionTypes.SET_CREATE:
			return { ...state, create: action.payload };
		case UtilActionTypes.SET_CREATE_T:
			return { ...state, createT: action.payload };
		default: return state;
	}
}

export default utilReducer;