import {GET_INFRA,DELETE_INFRA,ADD_INFRA,GET_INFRABYID,EDIT_INFRA} from '../actions/action';

const initialState = {
	infra : [],
	university : [],
}

export default function(state=initialState,action){
	switch(action.type){
		case GET_INFRA:
		return {
			...state,
			infra:action.payload
		};
		case DELETE_INFRA:
		console.log(state.infra);
		return{
			...state,
			infra:state.infra.filter(infra=>infra.i_infra_id !== action.payload)
		};
		case ADD_INFRA:
		return {
			...state,
			infra:[...state.infra,action.payload]
		};
		case GET_INFRABYID:
            return{
                ...state,
                infra:action.payload
        };
        case EDIT_INFRA:
            return{
                ...state,
                infra:action.payload
        };
        
		default:
		return state;


	}


}