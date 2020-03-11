import { combineReducers } from 'redux';
import users from './users';
import tweets from './tweets';

const rootReducer = combineReducers({
    users,
    tweets,
});

export default rootReducer;
