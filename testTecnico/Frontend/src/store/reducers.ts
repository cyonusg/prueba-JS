import { combineReducers } from 'redux';
import sourceChamp from './officialApi/reducer';
import championPull from './championPull/reducer';
const reducers = combineReducers({
    sourceChamp,
    championPull
});

export default reducers;
