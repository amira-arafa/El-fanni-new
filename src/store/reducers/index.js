import { combineReducers } from 'redux';
import locale from './Lang';
import auth from './Auth';

export default combineReducers({
    locale,
    auth
})