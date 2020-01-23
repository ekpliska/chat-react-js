const validate = ({ isAuth, values, errors }) => {

    const rules = {
        username: (value) => {
            if (!value) {
                errors.username = "Укажите ваш логин";
            }
        },
        email: (value) => {
            if (!value) {
                errors.email = "Введите ваш адрес электронной почты";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Неверный адрес электронной почты';
            }
        },
        password: (value) => {
            if (!value) {
                errors.password = "Введите пароль";
            } else if (isAuth && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{0,})/.test(value)) {
                errors.password = 'Пароль содержит недопустимые символы';
            }
        }
    };

    const keys = Object.keys(values);
    
    return keys.forEach(key => rules[key] && rules[key](values[key], errors));
}

export default validate;