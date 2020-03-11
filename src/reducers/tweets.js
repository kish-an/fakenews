import { RECEIVE_DATA } from '../actions/shared';

const tweets = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.tweets,
            };
        default:
            return state;
    }
}

export default tweets;
