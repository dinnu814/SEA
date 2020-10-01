import axios from 'axios';
import {GET_YEARS,DELETE_YEAR,ADD_YEAR,GET_YEARBYID,EDIT_YEAR,GET_ERRORS,CHANGE_STATUS} from './action';
import { createMessage } from './messageAction';

export const getYears = () => dispatch => {

	axios.get('/api/academic/')
	.then(res => {
		dispatch({
			type : GET_YEARS,
			payload : res.data
		});
	}).catch(err => console.log(err));

}


export const deleteYear = (id) => dispatch =>{
    axios
    .post(`api/academic/delete/${id}/`)
    .then(res =>{
        dispatch(createMessage({msg:'Record Deleted'}));
        dispatch({
            type:DELETE_YEAR,
            payload:id
        });
    })
    .catch(err=>console.log(err));
};

export const addYear = (year) => dispatch =>{
    axios
    .post(`/api/academic/`,year)
    .then(res =>{
        dispatch({
            type:ADD_YEAR,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const getYearById = (id) => dispatch =>{
    axios
    .get(`/api/academic/${id}/`)
    .then(res =>{
     	console.log(res.data)
        dispatch({
            type:GET_YEARBYID,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const editYear = (id,year) => dispatch =>{
    axios
    .put(`/api/academic/${id}/`,year)
    .then(res =>{
        dispatch({
            type:EDIT_YEAR,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const Change_default = (id) => dispatch =>{
    axios
    .post(`/api/change_default/${id}/`)
    .then(res =>{
        dispatch({
            type:CHANGE_STATUS,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

