import {combineReducers} from "redux";

import listReducer from './listsReducer';

export default combineReducers({
    lists:listReducer
});