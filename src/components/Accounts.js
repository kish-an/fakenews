import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const Accounts = () => {
    const users = useSelector(state => Object.values(state.users));
    const authedUser = useSelector(state => state.authedUser);
    const dispatch = useDispatch();

    const handleClick = id => {
        dispatch(setAuthedUser(id));
    }

    return (
        <ul className='account-list'>
            {users.map(user => (
                <li
                    className='account'
                    key={user.id}
                    style={{ border: user.id === authedUser ? '2px solid #1da0f2' : null}}
                    onClick={() => handleClick(user.id)}
                >
                    <img src={user.avatarURL} alt={user.name} />
                    <div className='info'>
                        <h3>{user.name}</h3>
                        <span>@{user.id}</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Accounts;
