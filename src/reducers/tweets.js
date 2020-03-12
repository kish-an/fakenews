import { RECEIVE_DATA } from '../actions/shared';
import { TOGGLE_TWEET_LIKE } from '../actions/tweets';

const tweets = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.tweets,
            };
        case TOGGLE_TWEET_LIKE:
            const { id, authedUser, hasLiked } = action;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    likes: hasLiked === true
                        ? state[id].likes.filter(like => like !== authedUser)
                        : state[id].likes.concat([authedUser]),
                }
            };
        default:
            return state;
    }
}

export default tweets;
