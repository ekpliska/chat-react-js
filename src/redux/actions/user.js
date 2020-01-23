import { userAPI } from '../../utils/api';

const actions = {
    setUserData: data => ({
        type: 'USER:SET_DATA',
        payload: data
    }),
    fetchUserSingIn: (postData) => dispatch => {
        return userAPI.singIn(postData)
            .then(({ data }) => {
                dispatch(actions.setUserData(data));
            })
        
    }
};

export default actions;