import axios from 'axios';
import { call, all, put, takeEvery } from 'redux-saga/effects';

import { SERVER_URL } from '../../../api/config/config';
import BoardActionTypes from './board.action.type';
import { loadedData, createNewBoard, toStarred, toRecently, addListItem } from './board.action';

function* boardSaga() {
	yield all([ call(loadData), call(saveDBCreateBoard)]);
}

function* loadData() {
	yield takeLatest(BoardActionTypes.BOARD_DATA_BRING, fetchDataFromDB);
}

function* fetchDataFromDB() {
	try{
		const datas = yield axios.post(SERVER_URL + "board").then(res => res.json());
		put(loadedData(datas));
	} catch(err){
		console.log(err);
	}
}

function* saveDBCreateBoard() {
	yield takeEvery(BoardActionTypes.CREATE_NEW_BOARD_START, saveDBCreateBoardAsync);
}

function* saveDBCreateBoardAsync({payload}) {
	try{
		axios.post(SERVER_URL + "board/create", payload);
		put(createNewBoard(payload));
	} catch(err){
		console.log(err);
	}
}

export default boardSaga;