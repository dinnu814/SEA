import axios from 'axios';
import {GET_SUBJECT,DELETE_CLASS,ADD_CLASS,GET_CLASSBYID,EDIT_CLASS,GET_SUBJECTBYCLASS,DELETE_SUBJECT_CLASS} from './action';
import { createMessage } from './messageAction';

export const getSubject = () => dispatch => {

	axios.get('/api/subject/')
	.then(res => {
		dispatch({
			type : GET_SUBJECT,
			payload : res.data
		});
	}).catch(err => console.log(err));

}

export const deleteClass = (id) => dispatch =>{
    axios
    .post(`/api/subject/delete/${id}/`)
    .then(res =>{
        dispatch({
            type:DELETE_CLASS,
            payload:id
        });
    })
    .catch(err=>console.log(err));
};

export const deleteSubjectAssign = (id) => dispatch =>{
    axios
    .post(`/api/subject_assign/delete/${id}/`)
    .then(res =>{
        dispatch(createMessage({msg:'Record Deleted'}));
        dispatch({
            type:DELETE_SUBJECT_CLASS,
            payload:id
        });
    })
    .catch(err=>console.log(err));
};




export const addClass = (year) => dispatch =>{
    axios
    .post(`/api/subject/`,year)
    .then(res =>{
        dispatch({
            type:ADD_CLASS,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const getClassById = (id) => dispatch =>{
    axios
    .get(`/api/subject/${id}/`)
    .then(res =>{
    	console.log(res.data)
        dispatch({
            type:GET_CLASSBYID,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const editClass = (id,year) => dispatch =>{
    axios
    .put(`/api/subject/${id}/`,year)
    .then(res =>{
        dispatch({
            type:EDIT_CLASS,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};
export const getviewSubjects = (id) => dispatch =>{
    axios
    .get(`/api/subject_class/${id}/`)
    .then(res =>{
        dispatch({
            type:GET_SUBJECTBYCLASS,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};