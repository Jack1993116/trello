import axios from 'axios';
import { takeEvery, takeLatest, put, all, call } from 'redux-saga/effects';

import { SERVER_URL } from '../../../api/config';
import UserActionTypes from './auth.action.type';
import { loginFailure, loginSuccess, signUpSuccess, signUpFailure } from './auth.action';

function* fetchAuthTokenSignupAsync(payload) {
	try{
		console.log(payload.payload);
		const user_token = yield axios.post(SERVER_URL + "signup", payload.payload).then(res=>{/*res.redirect('/main');*/ return res.data});
		yield put(signUpSuccess(user_token));
	} catch(err) {
		yield put(signUpFailure(err));
	}
}

function* fetchAuthTokenLoginAsync(payload) {
	try{
		const user_token = yield axios.post(SERVER_URL + "login", payload.payload).then(res=>{return res.data});
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