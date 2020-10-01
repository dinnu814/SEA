import axios from 'axios';
import {GET_BRANCH,GET_GROUP,DELETE_BRANCH,ADD_BRANCH,GET_BRANCHID,EDIT_BRANCH} from './action';
import { createMessage } from './messageAction';

export const getBranches = () => dispatch => {

	axios.get('/api/branch/')
	.then(res => {
		dispatch({
			type : GET_BRANCH,
			payload : res.data
		});
	}).catch(err => console.log(err));

}


export const deleteYear = (id) => dispatch =>{
    axios
    .post(`/api/branch/delete/${id}/`)
    .then(res =>{
        dispatch(createMessage({msg:'Record Deleted'}));
        dispatch({
            type:DELETE_BRANCH,
            payload:id
        });
    })
    .catch(err=>console.log(err));
};

export const addBranch = (branch) => dispatch =>{
    let form_data = new FormData();
    form_data.append('c_name', branch.c_name);
    form_data.append('c_code', branch.c_code);
    form_data.append('c_address', branch.c_address);
    form_data.append('c_description', branch.c_description);
    if(branch.c_logo != '')
    {
    form_data.append('c_logo', branch.c_logo, branch.c_logo.name);
    }
    else
    {
    form_data.append('c_logo', branch.c_logo);            
    }  
    form_data.append('i_university', branch.i_university);
    form_data.append('i_group',branch.i_group);
    form_data.append('c_status', branch.c_status);
    form_data.append('c_created_by', branch.c_created_by);
    form_data.append('c_updated_by', branch.c_updated_by);

 axios.post(`/api/branch/`,form_data, {
  headers: {
    'content-type': 'multipart/form-data'
  }
})
.then(res =>{
    console.log(res.data);
    dispatch({
        type:ADD_BRANCH,
        payload:res.data
    });
}).catch(err=>console.log(err));
};

export const getYearById = (id) => dispatch =>{
    axios
    .get(`/api/branch/${id}/`)
    .then(res =>{
    	console.log(res.data)
        dispatch({
            type:GET_BRANCHID,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};

export const getGroup = (id) => dispatch =>{
    axios
    .get(`/api/group_list/${id}/`)
    .then(res =>{
        dispatch({
            type:GET_GROUP,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};



export const editBranch = (id,branch) => dispatch =>{
    let form_data = new FormData();
        form_data.append('c_name', branch.c_name);
        form_data.append('c_code', branch.c_code);
        form_data.append('c_address', branch.c_address);
        form_data.append('c_description', branch.c_description);
        if(branch.c_logo != '' && branch.c_logo != null && typeof branch.c_logo=="object")
        {
        form_data.append('c_logo', branch.c_logo, branch.c_logo.name);
        }
        form_data.append('i_university', branch.i_university);
        form_data.append('i_group',branch.i_group);
        form_data.append('c_status', branch.c_status);
        form_data.append('c_created_by', branch.c_created_by);
        form_data.append('c_updated_by', branch.c_updated_by);
        console.log("Form-data", form_data)
    axios
    .put(`/api/branch/${id}/`,form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res =>{
        dispatch({
            type:EDIT_BRANCH,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};