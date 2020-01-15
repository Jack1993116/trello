import BoardActionTypes from './board.action.type';

export const loadData = () => {
	return {
		type: BoardActionTypes.BOARD_DATA_BRING
	}
}

export const loadedData = (data) => {
	return {
		type: BoardActionTypes.BOARD_DATA_BRING_FINISH,
		payload: data
	}
}

export const toRecentlyStart = (id) => {
	return {
		type: BoardActionTypes.BOARD_DATA_TO_RECENTLY_START,
		payload: id
	}
}

export const toStarredStart = (id) => {
	return {
		type: BoardActionTypes.BOARD_DATA_TO_STAR_START,
		payload: id
	}
}

export const addListItemStart = (data) => {
	return {
		type: BoardActionTypes.ADD_LIST_ITEM_START,
		payload: data
	}
}

export const createNewBoardStart = (data) => {
	return {
		type: BoardActionTypes.CREATE_NEW_BOARD_START,
		payload: data
	}
}

export const toRecently = (id) => {
	return {
		type: BoardActionTypes.BOARD_DATA_TO_RECENTLY,
		payload: id
	}
}

export const toStarred = (id) => {
	return {
		type: BoardActionTypes.BOARD_DATA_TO_STAR,
		payload: id
	}
}

export const addListItem = (data) => {
	return {
		type: BoardActionTypes.ADD_LIST_ITEM,
		payload: data
	}
}

export const createNewBoard = (data) => {
	return {
		type: BoardActionTypes.CREATE_NEW_BOARD,
		payload: data
	}
}