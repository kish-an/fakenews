import { RECEIVE_DATA } from '../actions/shared';
import { ADD_TWEET } from '../actions/tweets';

const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.users,
            };
        case ADD_TWEET:
            const { tweet } = action;
            const user = state[tweet.author]

            return {
                ...state,
                [tweet.author]: {
                    ...user,
                    tweets: user.tweets.concat([tweet.id]),
                }
            };
        default:
            return state;
    }
}

export default users;
