import {ASSIGN_SUBJECT} from '../actions/action';

const initialState = {
	subjectassign : []
}

export default function(state=initialState,action){
	switch(action.type){
		case ASSIGN_SUBJECT:
		return {
			...state,
			subjectassign:action.payload
		};
		
		default:
		return state;
	}


}