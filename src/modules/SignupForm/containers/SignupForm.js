import SignupForm from '../components/SignupForm';
import { withFormik } from 'formik';

export default withFormik({
    validate: values => {
        let errors = {};
        if (!values.email) {
            errors.email = "Введите ваш адрес электронной почты";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неверный адрес электронной почты';
        }
        if (!values.password) {
            errors.password = "Введите пароль";
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{0,})/.test(values.password)) {
            errors.password = 'Пароль содержит недопустимые символы';
        }
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert('');
        })
    },
    displayName: 'SugnupForm'
})(SignupForm);