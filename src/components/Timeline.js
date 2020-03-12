import React from 'react';
import { useSelector } from 'react-redux';
import TweetCard from './TweetCard';

const Timeline = () => {
    const tweets = useSelector(state => Object.values(state.tweets).sort((a, b) => b.timestamp - a.timestamp));

    return (
        <div>
            <h3 className='center'>Your Timeline</h3>
            {tweets.map(tweet => (
                <TweetCard key={tweet.id} tweet={tweet} />
            ))}
        </div>
    )
}

export default Timeline;
