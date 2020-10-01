import {GET_SECTIONBYCLASSID} from './action';
import axios from 'axios';

export const getSectionByClass = (id) => dispatch =>{
    axios
    .get(`/api/section_class/${id}/`)
    .then(res =>{
        dispatch({
            type:GET_SECTIONBYCLASSID,
            payload:res.data
        });
    }).catch(err=>console.log(err));
};