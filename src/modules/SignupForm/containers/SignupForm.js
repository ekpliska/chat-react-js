import SignupForm from '../components/SignupForm';
import { withFormik } from 'formik';

import validateForm from '../../../utils/validate';

import store from '../../../redux/store';
import { userActions } from '../../../redux/actions';

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        fullname: '',
        password: '',
        repeat_password: ''
    }),
    validate: values => {
        let errors = {};
        validateForm({ isAuth: false, values, errors });
        return errors;
    },
    handleSubmit: (values, { setSubmitting, props }) => {
        store
            .dispatch(userActions.fetchUserSingUp(values))
            .then(({ success }) => {
                if (success === true) {
                    setTimeout(() => {
                        props.history.push('/');
                    }, 2000);
                }
                setSubmitting(false);
            })
            .catch(() => {
                setSubmitting(false);
            });
    },
    displayName: 'SugnupForm'
})(SignupForm);