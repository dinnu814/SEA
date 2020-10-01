import {GET_HOBBY,DELETE_CLASS,ADD_CLASS,GET_HOBBYBYCLASSID,EDIT_CLASS,DELETE_HOBBY_CLASS} from '../actions/action';

const initialState = {
	hobbies : [],
	model : false,
}

export default function(state=initialState,action){
	switch(action.type){
		case GET_HOBBY:
		return {
			...state,
			hobbies:action.payload
		};
		case DELETE_CLASS:
		return{
			...state,
			hobbies:state.hobbies.filter(classd=>classd.i_hobby_id !== action.payload)
		};
		case DELETE_HOBBY_CLASS:
		return{
			...state,
			hobbies:state.hobbies.filter(classd=>classd.i_hobby_class_id !== action.payload)
		};
		case ADD_CLASS:
		return {
			...state,
			hobbies:[...state.hobbies,action.payload]
		};
		case GET_HOBBYBYCLASSID:
            return{
                ...state,
                hobbies:action.payload
        };
        case EDIT_CLASS:
            return{
                ...state,
                hobbies:action.payload
        };
		default:
		return state;


	}


}