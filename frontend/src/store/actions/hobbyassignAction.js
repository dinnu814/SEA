import axios from 'axios';
import {ASSIGN_HOBBY} from './action';
import { createMessage } from './messageAction';

export const getHobbyAssign = () => dispatch => {

	axios.get('/api/hobby_club_assign/')
	.then(res => {
        console.log(res.data)
		dispatch({
			type : ASSIGN_HOBBY,
			payload : res.data
		});
	}).catch(err => console.log(err));

}
