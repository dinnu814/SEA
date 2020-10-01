import {GET_SECTION,DELETE_SECTION,ADD_SECTION,GET_SECTIONBYID,EDIT_SECTION,GET_SECTIONBYCLASSID} from '../actions/action';

const initialState = {
	sections : [],
	model : false,
}

export default function(state=initialState,action){
	switch(action.type){
		case GET_SECTION:
		return {
			...state,
			sections:action.payload
		};
		case DELETE_SECTION:
		return{
			...state,
			sections:state.sections.filter(classd=>classd.i_section_id !== action.payload)
		};
		
		case ADD_SECTION:
		return {
			...state,
			sections:[...state.sections,action.payload]
		};
		case GET_SECTIONBYID:
            return{
                ...state,
                sections:action.payload
        };
        case EDIT_SECTION:
            return{
                ...state,
                sections:action.payload
		};
	
		default:
		return state;


	}


}