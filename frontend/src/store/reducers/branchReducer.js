import {GET_BRANCH,GET_GROUP,DELETE_BRANCH,ADD_BRANCH,GET_BRANCHID,EDIT_BRANCH} from '../actions/action';

const initialState = {
	branches : [],
	model : false,
}

export default function(state=initialState,action){
	switch(action.type){
		case GET_BRANCH:
		return {
			...state,
			branches:action.payload
		};
		case DELETE_BRANCH:
		return{
			...state,
			branches:state.branches.filter(year=>year.i_branch_id !== action.payload)
		};
		case ADD_BRANCH:
		return {
			...state,
			branches:[...state.branches,action.payload]
		};
		case GET_BRANCHID:
            return{
                ...state,
                branches:action.payload
		};
		
		case GET_GROUP:
            return{
                ...state,
				branches:action.payload
				
        };
        case EDIT_BRANCH:
            return{
                ...state,
                branches:action.payload
        };
		default:
		return state;


	}


}