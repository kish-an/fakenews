import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleReceiveData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';

const App = () => {
    const isLoading = useSelector(state => state.authedUser === null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleReceiveData());
    }, [dispatch]);

    return (
        <div>
            <LoadingBar />
            {
                isLoading
                    ? null
                    : (
                        <div>Starter Code</div>
                    )
            }
        </div>
    )
}

export default App;
