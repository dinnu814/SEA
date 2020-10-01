import {GET_SUBJECTBYCLASS,DELETE_SUBJECT_CLASS} from '../actions/action';

const initialState = {
	
	subjectsclass : [],
	
}

export default function(state=initialState,action){
	
	switch(action.type){
	
      
		case GET_SUBJECTBYCLASS:
            return{
                ...state,
                subjectsclass:action.payload
        };
        case DELETE_SUBJECT_CLASS:
		return{
			...state,
			subjects:state.subjects.filter(classd=>classd.i_subject_assign_id !== action.payload)
        };
        
		default:
		return state;


	}


}