import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatDate } from '../utils/helpers';
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';
import { handleToggleTweetLike } from '../actions/tweets';

const TweetCard = ({ tweet }) => {
    const { name, avatarURL, replyUserId, authedUser } = useSelector(state => {
        const { users, authedUser } = state;
        const user = users[tweet.author];

        let replyUserId;
        if (tweet.replyingTo) {
            const replyUser = Object.values(users).find(user => user.tweets.includes(tweet.replyingTo));
            replyUserId = replyUser.id;
        }

        const { name, avatarURL } = user;
        return {
            name,
            avatarURL,
            replyUserId,
            authedUser,
        }
    });
    const dispatch = useDispatch();

    const toggleLike = (e, hasLiked) => {
        e.preventDefault();
        dispatch(handleToggleTweetLike(tweet.id, authedUser, hasLiked));
    }

    const { timestamp, replyingTo, text, replies, likes, id } = tweet;

    return (
        <Link to={`/tweet/${id}`}>
            <div className='tweet'>
                <img src={avatarURL} alt={name} />
                <div className='tweet-info'>
                    <span>{name}</span>
                    <div className='time'>{formatDate(timestamp)}</div>
                    {replyingTo &&
                        <Link to={`/tweet/${replyingTo}`}>
                            <button className='reply'>
                                Replying to @{replyUserId}
                            </button>
                        </Link>
                    }

                    <p dangerouslySetInnerHTML={{__html: text}}></p>

                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='icon' />
                        <span>{replies.length > 0 ? replies.length : null}</span>
                        <button className='heart-button'>
                            {likes.includes(authedUser)
                                ? <TiHeartFullOutline
                                    className='icon'
                                    color='rgb(224, 36, 94)'
                                    onClick={(e) => toggleLike(e, true)}
                                />
                                : <TiHeartOutline className='icon' onClick={(e) => toggleLike(e, false)} />
                            }
                        </button>
                        <span>{likes.length > 0 ? likes.length : null}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TweetCard;

