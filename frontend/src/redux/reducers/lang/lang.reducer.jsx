import langActionType from './lang.action.type'

import en from './langs/en.json';
import ch from './langs/ch.json';

const INIT_STATE = {
	language: en
}

const langReducer = (state=INIT_STATE, action)=>{
	switch(action.type){
		case langActionType.CHANGE:
			console.log(en); 
			return { language: ch };
		default: return state;
	}
};

export default langReducer;