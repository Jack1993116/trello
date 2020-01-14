import BoardActionTypes from './board.action.type';

export const toRecently = (id) => {
	return {
		type: BoardActionTypes.BOARD_DATA_TO_RECENTLY,
		payload: id
	}
}