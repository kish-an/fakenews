import { saveLikeToggle } from '../utils/api';

export const TOGGLE_TWEET_LIKE = 'TOGGLE_TWEET_LIKE';

const toggleTweetLike = (id, authedUser, hasLiked) => {
    return {
        type: TOGGLE_TWEET_LIKE,
        id,
        authedUser,
        hasLiked,
    }
}

export const handleToggleTweetLike = (id, authedUser, hasLiked) => {
    return (dispatch) => {
        // Optimistic update
        dispatch(toggleTweetLike(id, authedUser, hasLiked));

        saveLikeToggle({
            id,
            authedUser,
            hasLiked,
        }).catch(() => {
                // Passing in the opposite of hasLiked, if there is an error when saving the liked tweet, to toggle the like in our store
                dispatch(toggleTweetLike(id, authedUser, !hasLiked));
                alert('An error has occured. Please try again.');
            });
    }
}
