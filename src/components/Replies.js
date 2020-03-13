import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TweetCard from './TweetCard';
import TweetForm from './TweetForm';
import { handleAddTweet } from '../actions/tweets';

const Replies = ({ match }) => {
    const { tweet, replies } = useSelector(state => {
        const tweets = Object.values(state.tweets);

        const tweet = tweets.find(tweet => tweet.id === match.params.id);
        const replies = tweet.replies.map(reply => state.tweets[reply]).sort((a, b) => b.timestamp - a.timestamp);

        return {
            tweet,
            replies,
        }
    });
    const authedUser = useSelector(state => state.authedUser);
    const dispatch = useDispatch();

    const handleSubmit = (event, content, cb) => {
        event.preventDefault();

        // Search content for hashtags and inject span to target wth css
        content = content.replace(/(^|\s)(#[a-z\d-]+)/ig, `$1<span class='hash-tag'>$2</span>`);

        dispatch(handleAddTweet(content, authedUser, tweet.id));

        // Clear reply form field
        cb();
    }

    return (
        <div>
            <TweetCard tweet={tweet} />
            <TweetForm formTitle='Compose Reply' user={authedUser} handleSubmit={handleSubmit} />
            {replies.map(reply =>
                <TweetCard key={reply.id} tweet={reply} />
            )}
        </div>
    )
}

export default Replies;
