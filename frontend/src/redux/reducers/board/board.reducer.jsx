import BoardActionTypes from './board.action.type';

const INIT_STATE = {
	base:[{
			boardTitle:"Teams1",
			boardType: "Private",
			colloborators: [],
			lists: { Todo:['a', 'b', 'c'], Doing:['1', '2', '3'], Done:['q','w','e'] },
			bk_url:"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/641x960/9c0a570b328ab427f18a15bfd2ffd838/photo-1568313081041-dbd174f69e3b.jpg"
		}, {
			boardTitle:"Teams2",
			boardType: "Private",
			colloborators: [],
			lists: { Todo:['d', 'f', 'e'], Doing:['4', '8', '9'], Done:['q','w','e'] },
			bk_url:"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/dd9165bde3d811a8e28f4aba2e5acbf1/photo-1578924152556-1bb298935ad6.jpg"
		}, {
			boardTitle:"Teams3",
			boardType: "Private",
			colloborators: [],
			lists: { Todo:['z', 'x', 'c'], Doing:['8', '4', '1'], Done:['q','w','e'] },
			bk_url:"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/dd9165bde3d811a8e28f4aba2e5acbf1/photo-1578924152556-1bb298935ad6.jpg"
		}
	],
	starred:[],
	recently:[],
	team:[]
}

const boardReducer = (state=INIT_STATE, action) => {
	let r, pos;
	switch(action.type) {
		case BoardActionTypes.BOARD_DATA_TO_RECENTLY:
			r = [...state.recently];

			if(!r.includes(action.payload)) {
				r.push(action.payload);
			}
			return { ...state, recently: r };
		case BoardActionTypes.BOARD_DATA_TO_STAR:
			r = [...state.starred];
			pos = r.indexOf(action.payload);

			if(pos < 0) {
				r.push(action.payload);
			} else {
				r.splice(pos, 1);
			}
			
			return { ...state, starred: r };
		case BoardActionTypes.ADD_LIST_ITEM:
			r = state.base[action.payload.id].lists[action.payload.title].push(action.payload.item);
			return { ...state };
		case BoardActionTypes.CREATE_NEW_BOARD:
			r = state.base.push(action.payload);
			console.log(action.payload);
			return { ...state };
		default: return state;
	}
}

export default boardReducer;