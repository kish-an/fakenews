import { getInitialData } from '../utils/api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

const receiveData = (users, tweets) => ({
    type: RECEIVE_DATA,
    users,
    tweets,
});

export const handleReceiveData = () => {
    return (dispatch) => {
        getInitialData()
            .then(({ users, tweets }) => dispatch(receiveData(users, tweets)))
    }
}
