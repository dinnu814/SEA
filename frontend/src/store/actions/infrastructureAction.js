import axios from 'axios';
import {GET_INFRA,DELETE_INFRA,ADD_INFRA,GET_INFRABYID,EDIT_INFRA} from './action';
import { createMessage } from './messageAction';

export const getInfra = () => dispatch => {

	axios.get('/api/infrastructure/')
	.then(res => {
		dispatch({
			type : GET_INFRA,
			payload : res.data
		});
	}).catch(err => console.log(err));

}



export const deleteInfra = (id) => dispatch =>{
    axios
    .post(`/api/infrastructure/delete/${id}/`)
    .then(res =>{
        dispatch(createMessage({msg:'Record Deleted'}));
        dispatch({
            type:DELETE_INFRA,
            payload:id
        });
    })
    .catch(err=>console.log(err));
};

export const addInfra = (infra) => dispatch =>{
        let form_data = new FormData();
        form_data.append('c_name', infra.c_name);
        form_data.append('c_code', infra.c_code);
        form_data.append('c_address', infra.c_address);
        form_data.append('c_description', infra.c_description);
        if(infra.c_logo != '')
        {
        form_data.append('c_logo', infra.c_logo, infra.c_logo.name);
        }
        else
        {
        form_data.append('c_logo', infra.c_logo);            
        }
        form_data.append('i_university', infra.i_university);
        form_data.append('c_status', infra.c_status);
        form_data.append('c_created_by', infra.c_created_by);
        form_data.append('c_updated_by', infra.c_updated_by);

     axios.post(`/api/infrastructure/`,form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res =>{
        console.log(res.data);
        dispatch({
            type:ADD_INFRA,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const getInfraById = (id) => dispatch =>{
    axios
    .get(`/api/infrastructure/${id}/`)
    .then(res =>{
    	console.log(res.data)
        dispatch({
            type:GET_INFRABYID,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const editInfra = (id,infra) => dispatch =>{
    let form_data = new FormData();
        form_data.append('c_name', infra.c_name);
        form_data.append('c_code', infra.c_code);
        form_data.append('c_address', infra.c_address);
        form_data.append('c_description', infra.c_description);
        console.log(typeof infra.c_logo);
        if(infra.c_logo != '' && infra.c_logo != null && typeof infra.c_logo=="object")
        {
        form_data.append('c_logo', infra.c_logo, infra.c_logo.name);
        }
        
    
        
        form_data.append('i_university', infra.i_university);
        form_data.append('c_status', infra.c_status);
        form_data.append('c_created_by', infra.c_created_by);
        form_data.append('c_updated_by', infra.c_updated_by);
    axios
    .put(`/api/infrastructure/${id}/`,form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res =>{
        dispatch({
            type:EDIT_INFRA,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

