import axios from 'axios';
import { takeEvery, takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './auth.action.type';
import { loginFailure, loginSuccess, signUpSuccess, signUpFailure } from './auth.action';

function* fetchAuthTokenSignupAsync(payload) {
	try{
		console.log(payload);
		const user_token = yield axios.post("http://localhost:3000/signup", payload).then(res=>res.data);
		console.log(user_token);
		yield put(signUpSuccess(user_token));
	} catch(err) {
		yield put(signUpFailure(err));
	}
}

function* fetchAuthTokenLoginAsync({payload}) {
	try{
		const user_token = yield axios.post("http://localhost:3000/login", payload).then(res=>res.data);
		console.log(user_token);
		yield put(loginSuccess(user_token));
	} catch(err) {
		yield put(loginFailure(err));
	}
}

function* fetchAuthTokenSignup() {
	yield takeLatest(
		UserActionTypes.SIGN_UP_START,
		fetchAuthTokenSignupAsync
	);
}

function* fetchAuthTokenLogin() {
	yield takeEvery(
		UserActionTypes.EMAIL_LOGIN_START,
		fetchAuthTokenLoginAsync
	)
}

function* authSaga() {
	yield all([call(fetchAuthTokenSignup), call(fetchAuthTokenLogin)]);
}

export default authSaga;