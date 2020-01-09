import UserActionTypes from './auth.action.type';
import setAuthToken from '../../../api/utils/setAuthToken';

export const emailLoginStart = (emailAndPassword) => {
	return {
		type: UserActionTypes.EMAIL_LOGIN_START,
		payload: emailAndPassword
	}
}

export const loginSuccess = (user_token) => {
	localStorage.setItem('jwt_token', user_token.token);
	return {
		type: UserActionTypes.LOGIN_SUCCESS,
		payload: user_token
	}
}

export const loginFailure = (error) => {
	return {
		type: UserActionTypes.LOGIN_FAILURE,
		payload: error
	}
}

export const emailSignInStart = (emailAndPassword) => {
	return {
		type: UserActionTypes.EMAIL_SIGN_IN_START,
		payload: emailAndPassword
	}
}

export const signUpSuccess = (user_token) => {
	localStorage.setItem('jwt_token', user_token.token);
	setAuthToken(localStorage.getItem('jwt_token'));
	return {
		type: UserActionTypes.SIGN_UP_SUCCESS,
		payload: user_token
	}
}

export const signUpFailure = (error) => {
	return {
		type: UserActionTypes.SIGN_UP_FAILURE,
		payload: error
	}
}

export const logout = () => {
	return {
		type: UserActionTypes.LOG_OUT
	}
}