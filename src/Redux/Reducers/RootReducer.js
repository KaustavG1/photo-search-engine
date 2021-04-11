import { combineReducers } from 'redux';
import SearchReducer from './SearchReducer';
import APICallReducer from './APICallReducer';

const RootReducer = combineReducers({
    SearchReducer,
    APICallReducer
});

export default RootReducer;
