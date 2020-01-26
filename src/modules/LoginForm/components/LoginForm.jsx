import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from 'antd';

import { Button, Panel, FormField } from '../../../components';

const LoginForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = props;
    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккуант</h2>
                <p>Для входа используйте форму входа</p>
            </div>
            <Panel>
                <Form className="login-form">
                    <FormField
                        name="email"
                        values={values}
                        placeholder="Электронная почта"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        icon="mail"
                        touched={touched}
                        errors={errors}
                    />

                    <FormField
                        type="password"
                        name="password"
                        values={values}
                        placeholder="Пароль"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        icon="lock"
                        touched={touched}
                        errors={errors}
                    />
                    <Form.Item>
                        <Button
                            className="button__large"
                            type="primary"
                            size="large"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            Войти
                        </Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/signup">Зарегистрироваться</Link>
                </Form>

            </Panel>

        </div>
    )
}

const WrappedNormalLoginForm = Form.create({ name: 'auth' })(LoginForm);

export default WrappedNormalLoginForm;