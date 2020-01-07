import { call, all } from 'redux-saga/effects';

import authSaga from './reducers/auth/auth.saga';

export default function* rootSaga() {
	yield all([call(authSaga)]);
}