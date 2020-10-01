import axios from 'axios';
import {ASSIGN_SUBJECT} from './action';

export const getSubjectAssign = () => dispatch => {

	axios.get('/api/subject_assign/')
	.then(res => {
        console.log(res.data)
		dispatch({
			type : ASSIGN_SUBJECT,
			payload : res.data
		});
	}).catch(err => console.log(err));

}

