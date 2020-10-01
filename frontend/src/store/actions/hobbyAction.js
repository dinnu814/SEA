import axios from 'axios';
import {GET_HOBBY,DELETE_CLASS,ADD_CLASS,EDIT_CLASS,GET_HOBBYBYCLASSID,GET_HOBBYBYCLASS,DELETE_HOBBY_CLASS} from './action';
import { createMessage } from './messageAction';

export const getHobby = () => dispatch => {

	axios.get('/api/hobby_club/')
	.then(res => {
		dispatch({
			type : GET_HOBBY,
			payload : res.data
		});
	}).catch(err => console.log(err));

}

export const deleteClass = (id) => dispatch =>{
    axios
    .post(`/api/hobby_club/delete/${id}/`)
    .then(res =>{
        dispatch({
            type:DELETE_CLASS,
            payload:id
        });
    })
    .catch(err=>console.log(err));
};

export const deleteHobbyAssign = (id) => dispatch =>{
    axios
    .post(`/api/hobby_assign/delete/${id}/`)
    .then(res =>{
        dispatch(createMessage({msg:'Record Deleted'}));
        dispatch({
            type:DELETE_HOBBY_CLASS,
            payload:id
        });
    })
    .catch(err=>console.log(err));
};

export const addClass = (year) => dispatch =>{
    axios
    .post(`/api/hobby_club/`,year)
    .then(res =>{
        dispatch({
            type:ADD_CLASS,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const getHobbyById = (id) => dispatch =>{
    axios
    .get(`/api/hobby_club/${id}/`)
    .then(res =>{
    	console.log(res.data)
        dispatch({
            type:GET_HOBBYBYCLASSID,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const editClass = (id,year) => dispatch =>{
    axios
    .put(`/api/hobby_club/${id}/`,year)
    .then(res =>{
        dispatch({
            type:EDIT_CLASS,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const getviewHobby = (id) => dispatch =>{
    axios
    .get(`/api/hobby_class/${id}/`)
    .then(res =>{
console.log("IN ACTION", res.data)
        dispatch({
            type:GET_HOBBYBYCLASS,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};