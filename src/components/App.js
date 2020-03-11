import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleReceiveData } from '../actions/shared';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleReceiveData());
    }, [dispatch]);

    return (
        <div>
            Starter Code.
        </div>
    )
}

export default App;
