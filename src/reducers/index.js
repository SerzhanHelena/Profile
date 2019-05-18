import { combineReducers } from 'redux';
import { students } from './studentsReducer';
import { handlePopUp } from './modalReducer';


export const rootReducer = combineReducers({
	students, handlePopUp
});