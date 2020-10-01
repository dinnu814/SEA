import {GET_ERRORS} from '../actions/action';

const initialState = {
	msg : {},
	status : null
};

export default function(state=initialState,action){
	switch(action.type){
		case GET_ERRORS :
		return {
			msg :action.payload.error,
			status :action.payload.status
		};
		default:
			return state;
	}
}