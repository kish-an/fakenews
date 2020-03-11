import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { setAuthedUser, id } from './authedUser';

export const RECEIVE_DATA = 'RECEIVE_DATA';

const receiveData = (users, tweets) => ({
    type: RECEIVE_DATA,
    users,
    tweets,
});

export const handleReceiveData = () => {
    return (dispatch) => {
        dispatch(showLoading());

        getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveData(users, tweets));
                dispatch(setAuthedUser(id));
            })
            .then(() => dispatch(hideLoading()));
    }
}
