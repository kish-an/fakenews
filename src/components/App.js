import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleReceiveData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import Timeline from './Timeline';
import Nav from './Nav';

const App = () => {
    const isLoading = useSelector(state => state.authedUser === null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleReceiveData());
    }, [dispatch]);

    return (
        <Router>
            <>
                <LoadingBar />
                <div className='container'>
                    <Nav />
                    {isLoading
                        ? null
                        : (
                            <>
                                <Switch>
                                    <Route exact path='/' component={Timeline} />
                                    <Redirect to='/' />
                                </Switch>
                            </>
                        )
                    }
                </div>
            </>
        </Router>
    )
}

export default App;
