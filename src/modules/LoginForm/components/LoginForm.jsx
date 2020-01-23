import React from 'react';
import { Form, Icon, Input } from 'antd';
import { validateField } from '../../../utils/helpers';
import { Button, Panel } from '../../../components';
import { Link } from 'react-router-dom';



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
                    <Form.Item validateStatus={validateField('email', touched, errors)} hasFeedback
                        help={!touched.email ? "" : errors.email}>
                        <Input id="email" name="email" value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            prefix={<Icon type="name" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email" size="large" />

                    </Form.Item>
                    <Form.Item validateStatus={validateField('password', touched, errors)} hasFeedback
                        help={!touched.password ? "" : errors.password}>
                        <Input id="password" name="password" value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password" placeholder="Пароль" size="large" />
                    </Form.Item>
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