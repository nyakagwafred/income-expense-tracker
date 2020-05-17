import { combineReducers } from 'redux';
import authReducer from './authReducer';
import transactionReducer from './transactionReducer';
import alertReducer from './alert';

export default combineReducers({
	auth: authReducer,
	transaction: transactionReducer,
	alert: alertReducer,
});
