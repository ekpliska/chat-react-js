import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Icon } from 'antd';

import { validateField } from '../../../utils/helpers';
import { Button, Panel, FormField } from '../../../components';

const success = true;

const SignupForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа вам необходимо зарегистрироваться</p>
            </div>
            <Panel>
                {
                    success
                        ?
                        <Form className="login-form">
                            <FormField 
                                name="email" 
                                values={ values } 
                                placeholder="Электронная почта"
                                handleChange={ handleChange } 
                                handleBlur={ handleBlur }
                                icon="mail"
                                touched={ touched }
                                errors={ errors }
                            />

                            <FormField 
                                name="fullname"
                                values={ values } 
                                placeholder="Ваше имя"
                                handleChange={ handleChange } 
                                handleBlur={ handleBlur }
                                icon="user"
                                touched={ touched }
                                errors={ errors }
                            />

                            <FormField 
                                type="password"
                                name="password"
                                values={ values } 
                                placeholder="Пароль"
                                handleChange={ handleChange } 
                                handleBlur={ handleBlur }
                                icon="lock"
                                touched={ touched }
                                errors={ errors }
                            />

                            <FormField 
                                type="password"
                                name="repeat_password"
                                values={ values } 
                                placeholder="Повторите пароль"
                                handleChange={ handleChange } 
                                handleBlur={ handleBlur }
                                icon="lock"
                                touched={ touched }
                                errors={ errors }
                            />

                            <Form.Item>
                                <Button onClick={handleSubmit} className="button__large" type="primary" size="large">Зарегистироваться</Button>
                            </Form.Item>
                            <Link className="auth__register-link" to="/login">Вход</Link>
                        </Form>
                        :
                        <div className="auth__success-block">
                            <div>
                                <Icon type="exclamation-circle" theme="twoTone" />
                            </div>
                            <h2>Подтвердите свой аккаунт</h2>
                            <p>На вашу почту было отправлено письмо с ссылкой для подтверждения регистрации</p>
                        </div>
                }


            </Panel>

        </div>
    )
}

const WrappedNormalLoginForm = Form.create({ name: 'signup' })(SignupForm);

export default WrappedNormalLoginForm;