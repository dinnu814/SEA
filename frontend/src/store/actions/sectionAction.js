import axios from 'axios';
import {GET_SECTION,DELETE_SECTION,ADD_SECTION,GET_SECTIONBYID,EDIT_SECTION} from './action';
import { createMessage } from './messageAction';

export const getSection = () => dispatch => {

	axios.get('/api/section/')
	.then(res => {
		dispatch({
			type : GET_SECTION,
			payload : res.data
		});
	}).catch(err => console.log(err));

}
export const editSection = (id,year) => dispatch =>{
    alert(year);
    axios
    .put(`/api/section/${id}/`,year)
    .then(res =>{
        dispatch({
            type:EDIT_SECTION,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const deleteSection = (id) => dispatch =>{
    axios
    .post(`/api/section/delete/${id}/`)
    .then(res =>{
        dispatch(createMessage({msg:'Record Deleted'}));
        dispatch({
            type:DELETE_SECTION,
            payload:id
        });
    })
    .catch(err=>console.log(err));
};

export const addSection = (year) => dispatch =>{
    axios
    .post(`/api/section/`,year)
    .then(res =>{
        dispatch({
            type:ADD_SECTION,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const getSectionById = (id) => dispatch =>{
    axios
    .get(`/api/section/${id}/`)
    .then(res =>{
    	console.log(res.data)
        dispatch({
            type:GET_SECTIONBYID,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};



