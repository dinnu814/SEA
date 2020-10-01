import {ASSIGN_HOBBY} from '../actions/action';

const initialState = {
	hobbiesassign : [],
}

export default function(state=initialState,action){
	switch(action.type){
		case ASSIGN_HOBBY:
		return {
			...state,
			hobbiesassign:action.payload
		};
		
		default:
		return state;
	}
}