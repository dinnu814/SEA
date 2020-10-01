import * as actionTypes from '../actions/action';
const initialState={
    topbar:true,
    footer:true,
    loginpage:false,
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case actionTypes.TOPBAR:
        return{
            ...state,
            top_bar:!state.topbar
        };
        case actionTypes.FOOTER:
        return{
            ...state,
            footer:!state.footer
        };
        case actionTypes.LOGINPAGE:
        return{
            ...state,
            loginpage:!state.loginpage
        };
        default :
        return state;
    }
}

export default reducer;