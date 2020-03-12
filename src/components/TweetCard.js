import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatDate } from '../utils/helpers';
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';

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

    const { timestamp, replyingTo, text, replies, likes, id } = tweet;

    return (
        <Link to={`/tweet/${id}`}>
            <div className='tweet'>
                <img src={avatarURL} alt={name} />
                <div className='tweet-info'>
                    <span>{name}</span>
                    <div className='time'>{formatDate(timestamp)}</div>
                    {replyingTo && <div className='reply'>Replying to @{replyUserId}</div>}

                    <p>{text}</p>

                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='icon' />
                        <span>{replies.length > 0 ? replies.length : null}</span>
                        <button className='heart-button'>
                            {likes.includes(authedUser)
                                ? <TiHeartFullOutline
                                        className='icon'
                                        color='rgb(224, 36, 94)'
                                    />
                                :  <TiHeartOutline className='icon' />
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

