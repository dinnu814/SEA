import {GET_CLASS,DELETE_CLASS,ADD_CLASS,GET_CLASSBYID,EDIT_CLASS} from '../actions/action';

const initialState = {
	classes : [],
}

export default function(state=initialState,action){
	switch(action.type){
		case GET_CLASS:
		return {
			...state,
			classes:action.payload
		};
		case DELETE_CLASS:
		return{
			...state,
			classes:state.classes.filter(classd=>classd.i_class_id !== action.payload)
		};
		case ADD_CLASS:
		return {
			...state,
			classes:[...state.classes,action.payload]
		};
		case GET_CLASSBYID:
            return{
                ...state,
                classes:action.payload
        };
        case EDIT_CLASS:
            return{
                ...state,
                classes:action.payload
        };
		default:
		return state;


	}


}