import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import users from './users';
import tweets from './tweets';
import authedUser from './authedUser';

const rootReducer = combineReducers({
    users,
    tweets,
    authedUser,
    loadingBar: loadingBarReducer,
});

export default rootReducer;
