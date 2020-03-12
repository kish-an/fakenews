import { RECEIVE_DATA } from '../actions/shared';
import { TOGGLE_TWEET_LIKE } from '../actions/tweets';
import { ADD_TWEET } from '../actions/tweets';

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
        case ADD_TWEET:
            const { tweet } = action;

            return {
                ...state,
                [tweet.id]: {
                    ...tweet,
                }
            }
        default:
            return state;
    }
}

export default tweets;
