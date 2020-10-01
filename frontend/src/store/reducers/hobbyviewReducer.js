import {GET_HOBBYBYCLASSID,GET_HOBBYBYCLASS} from '../actions/action';

const initialState = {
	viewhobbies : [],
}

export default function(state=initialState,action){
	switch(action.type){
        case GET_HOBBYBYCLASSID:
            return{
                ...state,
                viewhobbies:action.payload
        };
        case GET_HOBBYBYCLASS:
            return{
                ...state,
                viewhobbies:action.payload
        };
		
		default:
		return state;
	}


}