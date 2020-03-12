import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';
import TweetForm from './TweetForm';

const AddTweet = ({ history }) => {
    const authedUser = useSelector(state => state.authedUser);
    const dispatch = useDispatch();

    const handleSubmit = (event, content) => {
        event.preventDefault();

        // Search content for hashtags and inject span to target wth css
        content = content.replace(/(^|\s)(#[a-z\d-]+)/ig, `$1<span class='hash-tag'>$2</span>`)

        dispatch(handleAddTweet(content, authedUser, null));
        history.push('/');
    }

    return (
        <TweetForm
            formTitle='Compose New Tweet'
            handleSubmit={handleSubmit}
            user={authedUser}
        />
    )
}

export default AddTweet;
