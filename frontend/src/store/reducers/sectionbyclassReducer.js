import {GET_SECTIONBYCLASSID} from '../actions/action';

const initialState = {
	sectionsclass : [],
	model : false,
}
export default function(state=initialState,action){
	switch(action.type){

case GET_SECTIONBYCLASSID:
    return{
        ...state,
        sectionsclass:action.payload
};
default:
		return state;


	}


}