import { saveLikeToggle,  saveTweet } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const TOGGLE_TWEET_LIKE = 'TOGGLE_TWEET_LIKE';
export const ADD_TWEET = 'ADD_TWEET';

const toggleTweetLike = (id, authedUser, hasLiked) => ({
    type: TOGGLE_TWEET_LIKE,
    id,
    authedUser,
    hasLiked,
});

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

const addTweet = tweet => ({
    type: ADD_TWEET,
    tweet,
});

export const handleAddTweet = (content, author, replyingTo) => {
    return (dispatch) => {
        dispatch(showLoading());

        saveTweet({
            text: content,
            author,
            replyingTo,
        })
            .then(tweet => dispatch(addTweet(tweet)))
            .then(() => dispatch(hideLoading()));

    }
}
