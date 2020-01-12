import UserActionTypes from './auth.action.type';

const INIT_STATE = {
	isLogin: true,
	user: null,
	status: null,
	error: null,
	loading: false
}

const userReducer = (state=INIT_STATE, action) => {
	let error;
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {...state, isLogin: true, user: action.payload.user, status: "signup"};
		case UserActionTypes.SIGN_IN_FAILURE:
		    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
			return {...state, error: error, status: "signup", isLogin: false };
		case UserActionTypes.LOG_OUT:
			localStorage.removeItem('jwt_token');
			return {...state, isLogin:false }
		default: return INIT_STATE;
	}
}

export default userReducer;