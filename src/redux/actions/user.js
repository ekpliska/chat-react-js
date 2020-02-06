
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
                notification({
                    title: 'Авторизация',
                    description: 'Успех',
                    type: 'success'
                });
                window.axios.defaults.headers.common['token'] = token;
                window.localStorage['token'] = token;
                dispatch(actions.fetchUserData());
                return data;
            })
            .catch(({ response }) => {
                if (response.status === 403) {
                    notification({
                        title: 'Ошибка авторизации',
                        description: 'Неверный email или пароль',
                        type: 'error'
                    });
                }
            });
    },
    fetchUserSingUp: (postData) => dispatch => {
        return userAPI.singUp(postData)
            .then(({ data }) => {
                console.log('data', data);
                const { success, token } = data;
                notification({
                    title: 'Регистрация',
                    description: 'Вы были успешно зарегистрированы',
                    type: 'success'
                });
                window.axios.defaults.headers.common['token'] = token;
                window.localStorage['token'] = token;
                dispatch(actions.fetchUserData());
                return data;
            })
            .catch(({ response }) => {
                if (response.status === 403) {
                    notification({
                        title: 'Ошибка авторизации',
                        description: 'Неверный email или пароль',
                        type: 'error'
                    });
                }
            });
    }
};

export default actions;