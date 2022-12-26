import { combineReducers } from 'redux';
import locale from './Lang';
import auth from './Auth';
import home from "./Home";

export default combineReducers({
    locale,
    auth,
    home
})