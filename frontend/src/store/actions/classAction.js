import axios from 'axios';
import {GET_CLASS,DELETE_CLASS,ADD_CLASS,GET_CLASSBYID,EDIT_CLASS} from './action';
import { createMessage } from './messageAction';

export const getClass = () => dispatch => {

	axios.get('/api/class/')
	.then(res => {
		dispatch({
			type : GET_CLASS,
			payload : res.data
		});
	}).catch(err => console.log(err));

}

export const deleteClass = (id) => dispatch =>{
    axios
    .post(`/api/class/delete/${id}/`)
    .then(res =>{
        dispatch(createMessage({msg:'Record Deleted'}));
        dispatch({
            type:DELETE_CLASS,
            payload:id
        });
    })
    .catch(err=>console.log(err));
};

export const addClass = (year) => dispatch =>{
    axios
    .post(`/api/class/`,year)
    .then(res =>{
        dispatch({
            type:ADD_CLASS,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const getClassById = (id) => dispatch =>{
    axios
    .get(`/api/class/${id}/`)
    .then(res =>{
    	console.log(res.data)
        dispatch({
            type:GET_CLASSBYID,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const editClass = (id,classd) => dispatch =>{
    axios
    .put(`/api/class/${id}/`,classd)
    .then(res =>{
        dispatch({
            type:EDIT_CLASS,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

