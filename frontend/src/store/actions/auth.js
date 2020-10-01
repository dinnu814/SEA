import {AUTH_START,AUTH_SUCCESS,AUTH_FAIL,AUTH_LOGOUT,GET_ERRORS} from '../actions/action';
import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const authStart = () => {
    return {
        type:AUTH_START
    }
}

export const authSuccess = token => {
    return {
        
        type:AUTH_SUCCESS,
        token:token
        
    }
}

export const authFail = error => {
    return {
        
        type:AUTH_FAIL,
        error:error
        
    }
}

export const logout = () => dispatch => {
        const token = localStorage.getItem('token')
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        //Headers
        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        };
        //if token,add to headres config
        if (token){
            config.headers["Authorization"] = `Token ${token}`;
        }

        axios
        .post('/auth/token/logout/',null,config)
        .then(res =>{
            dispatch({
                type:AUTH_LOGOUT
            });
        })
    
    }



export const checkAuthTimeout = expirationTime =>{
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}
export const authLogin = (username,password) =>{
    return dispatch =>{
        dispatch(authStart());
        axios.post('/auth/token/login/',{
            username:username,
            password:password
        })
        .then(res => {

            const token = res.data.auth_token;
            console.log("Token in action is ",token);
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            console.log("Expiration date is : ",expirationDate);
            let token1 = localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);

            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
            window.location.href = "/index";
        })

        .catch(err=>{
        const errors = {
            error : err.response.data,
            status : err.response.status
        }//errors close

        dispatch({
            type:GET_ERRORS,
            payload:errors
        });
    this.props.history.push('/login');
    });//catch close

    }
}
 
export const authSignup = (username,email,password1) =>{
    return dispatch =>{
        dispatch(authStart());
        axios.post('/auth/users/',{
            username:username,
            email:email,
            password:password1

        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            console.log("Expiration date is : ",expirationDate);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
            window.location.href = "/login";
        })        
        .catch(err=>{
        localStorage.setItem('error','true');
        const errors = {
            error : err.response.data,
            status : err.response.status
        }//errors close


        dispatch({
            type:GET_ERRORS,
            payload:errors
        });
        this.props.history.push('/signup');
        
        });//catch close
    }
}

export const authCheckState = () => {
    return dispatch =>{
        // const token = res.data.key;
        const token = localStorage.getItem('token');
        if(token === undefined || token === null) {
            dispatch(logout());
        } else {
            
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            // const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if( expirationDate <= new Date() ) {
                console.log("expiration")
                dispatch(logout());
            } else {
                console.log(token)
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) /1000 ));
            }
        }

    }
}