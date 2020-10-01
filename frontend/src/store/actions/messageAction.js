import {CREATE_MESSAGE} from './action';

export const createMessage = msg => {
	return {
		type : CREATE_MESSAGE,
		payload :msg
	};
};