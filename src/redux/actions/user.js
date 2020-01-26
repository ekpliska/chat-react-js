
import { userAPI } from '../../utils/api';

import { notification } from '../../utils/helpers';

const actions = {
    setUserData: data => ({
        type: 'USER:SET_DATA',
        payload: data
    }),
    fetchUserData: () => dispatch => {
        userAPI
            .myProfile()
            .then(({ data }) => {
                dispatch(actions.setUserData(data))
            });
    },
    fetchUserSingIn: (postData) => dispatch => {
        return userAPI.singIn(postData)
            .then(({ data }) => {
                const { success, token } = data;
                if (success === false) {
                    notification({
                        title: 'Ошибка авторизации',
                        description: 'Неверный email или пароль',
                        type: 'error'
                    });
                } else {
                    notification({
                        title: 'Авторизация',
                        description: 'Успех',
                        type: 'success'
                    });
                    window.axios.defaults.headers.common['token'] = token;
                    window.localStorage['token'] = token;
                    dispatch(actions.fetchUserData());
                    return data;
                }
            })        
    }
};

export default actions;