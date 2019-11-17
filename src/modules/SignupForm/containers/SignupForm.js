import SignupForm from '../components/SignupForm';
import { withFormik } from 'formik';
import validateForm from '../../../utils/validate';

export default withFormik({
    validate: values => {
        let errors = {};
        validateForm({ isAuth: false, values, errors });
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert('');
        })
    },
    displayName: 'SugnupForm'
})(SignupForm);