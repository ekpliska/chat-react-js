import LoginForm from '../components/LoginForm';
import { withFormik } from 'formik';
import validateForm from '../../../utils/validate';


export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        username: '',
        password: '',
    }),
    validate: values => {
        let errors = {};
        validateForm({ isAuth: true, values, errors });
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert('');
        })
    },
    displayName: 'LoginForm'
})(LoginForm);