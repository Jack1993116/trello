import UserActionTypes from './auth.action.type';

const INIT_STATE = {
	isLogin: true,
	isSignup: false,
	user: null,
	status: null,
	error: null,
	loading: false
}

const userReducer = (state=INIT_STATE, action) => {
	let error;
	switch (action.type) {
		case UserActionTypes.SIGN_UP_SUCCESS:
			return {...state, isSignup: true};
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {...state, isLogin: true, user: action.payload.user, status: "signup"};
		case UserActionTypes.SIGN_IN_FAILURE:
		    error = action.payload.data || {message: action.payload.message};
			return {...state, error: error, status: "signup", isLogin: false };
		case UserActionTypes.LOGIN_SUCCESS:
			return {...state, isLogin: true};
		case UserActionTypes.LOG_OUT:
			localStorage.removeItem('jwt_token');
			return {...state, isLogin:false }
		default: return state;
	}
}

export default userReducer;