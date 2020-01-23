import BoardActionTypes from './board.action.type';
import { getDataById } from '../../../api/utils/getDataById';

const INIT_STATE = {
	base:[{
			id: 1,
			boardTitle:"Teams1",
			boardType: "Private",
			colloborators: [],
			lists: { Todo:['a', 'b', 'c'], Doing:['1', '2', '3'], Done:['q','w','e'] },
			bk_url:"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1367x2048/e3f86fba993a9f7bf2ab03234b25a022/photo-1568313081041-dbd174f69e3b"
		}, {
			id: 3,
			boardTitle:"Teams2",
			boardType: "Private",
			colloborators: [],
			lists: { Todo:['d', 'f', 'e'], Doing:['4', '8', '9'], Done:['q','w','e'] },
			bk_url:"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/original/96b408b901dfccc9ff7517153e88b8f7/photo-1578750120916-a69a88bcf673"
		}, {
			id: 2,
			boardTitle:"Teams3",
			boardType: "Private",
			colloborators: [],
			lists: { Todo:['z', 'x', 'c'], Doing:['8', '4', '1'], Done:['q','w','e'] },
			bk_url:"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/original/7021d7a65a8f4484e456a499becc3c43/photo-1578951140687-196be174abde"
		}],
	starred:[],
	recently:[],
	team:[],
}

const boardReducer = (state=INIT_STATE, action) => {
	let r, tmp, pos, pos_tmp;
	switch(action.type) {
		case BoardActionTypes.BOARD_DATA_TO_RECENTLY:
			r = [...state.recently];

			if(!r.includes(action.payload)) {
				r.unshift(action.payload);
			}
			
			return { ...state, recently: r };
		case BoardActionTypes.BOARD_DATA_TO_STAR:
			r = [...state.starred];
			tmp = [...state.recently];
			pos = r.indexOf(action.payload);

			if(pos < 0) {
				r.push(action.payload);
				pos_tmp = tmp.indexOf(action.payload);
				tmp.splice(pos_tmp, 1);
			} else {
				r.splice(pos, 1);
			}
			
			return { ...state, starred: r };
		case BoardActionTypes.ADD_LIST_ITEM:
			r = getDataById(state.base, action.payload.id).lists[action.payload.title].push(action.payload.item);
			return { ...state };
		case BoardActionTypes.CREATE_NEW_BOARD:
			r = state.base.push({...action.payload, id: "new"});
			return { ...state };
		default: return state;
	}
}

export default boardReducer;
/*
{
			id: 1,
			boardTitle:"Teams1",
			boardType: "Private",
			colloborators: [],
			lists: { Todo:['a', 'b', 'c'], Doing:['1', '2', '3'], Done:['q','w','e'] },
			bk_url:"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1367x2048/e3f86fba993a9f7bf2ab03234b25a022/photo-1568313081041-dbd174f69e3b"
		}, {
			id: 3,
			boardTitle:"Teams2",
			boardType: "Private",
			colloborators: [],
			lists: { Todo:['d', 'f', 'e'], Doing:['4', '8', '9'], Done:['q','w','e'] },
			bk_url:"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/original/96b408b901dfccc9ff7517153e88b8f7/photo-1578750120916-a69a88bcf673"
		}, {
			id: 2,
			boardTitle:"Teams3",
			boardType: "Private",
			colloborators: [],
			lists: { Todo:['z', 'x', 'c'], Doing:['8', '4', '1'], Done:['q','w','e'] },
			bk_url:"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/original/7021d7a65a8f4484e456a499becc3c43/photo-1578951140687-196be174abde"
		}
*/