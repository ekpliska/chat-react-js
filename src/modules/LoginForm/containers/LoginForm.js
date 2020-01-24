import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { withFormik } from 'formik';

import validateForm from '../../../utils/validate';

import store from '../../../redux/store';
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
    handleSubmit: (values, { setSubmitting, props }) => {
        store
            .dispatch(userActions.fetchUserSingIn(values))
            .then(({ success }) => {
                
                
                if (success === true) {
                    console.log('handleSubmit', props);
                    setTimeout(() => {
                        props.history.push('/');
                    }, 2000);
                }
                setSubmitting(false);
            });
    },
    displayName: 'LoginForm'
})(LoginFormConnect);


export default LoginFormContainer;