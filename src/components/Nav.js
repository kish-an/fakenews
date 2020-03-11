import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active'>
                        New Tweet
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/account' activeClassName='active'>
                        Change Account
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
