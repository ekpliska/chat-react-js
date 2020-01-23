import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { withFormik } from 'formik';

import validateForm from '../../../utils/validate';
import { notification } from '../../../utils/helpers';

import { axios } from '../../../core';
import { userActions } from '../../../redux/actions';

const LoginFormConnect = connect(
    state => state,
    userActions
)(LoginForm); 

const LoginFormContainer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: '',
    }),
    validate: values => {
        let errors = {};
        validateForm({ isAuth: false, values, errors });
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        return axios
            .post('/user/sing-in', values)
            .then(({ data }) => {
                const { success, token } = data;
                console.log('data', data);
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
                }
                // console.log(data);
                // localStorage.tolen = data.token;
                setSubmitting(false);
            })
            .catch(() => {
                setSubmitting(false);
            });
    },
    displayName: 'LoginForm'
})(LoginFormConnect);


export default LoginFormContainer;