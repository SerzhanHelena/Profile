import { combineReducers } from 'redux';
import { students } from './studentsReducer';


export const rootReducer = combineReducers({
	students
});