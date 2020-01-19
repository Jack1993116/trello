import UtilActionTypes from './util.action.type';

const setCreate = (data) => {
	return {
		type: UtilActionTypes.SET_CREATE,
		payload: data
	}
}

const setCreateT = (data) => {
	console.log(data);
	return {
		type: UtilActionTypes.SET_CREATE_T,
		payload: data
	}
}

export { setCreate, setCreateT };