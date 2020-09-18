import {combineReducers} from "redux";

import listReducer from './listsReducer';
import labelReducer from './labelReducer';

export default combineReducers({
    lists:listReducer,
    labels:labelReducer
});