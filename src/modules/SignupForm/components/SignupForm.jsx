import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Button, Panel } from '../../../components';
import { Link } from 'react-router-dom';

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
                            <Form.Item validateStatus={!touched.email ? "" : errors.email ? 'error' : 'success'} hasFeedback
                                help={!touched.email ? "" : errors.email}>
                                <Input 
                                    id ="email" name="email" value={values.email} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Электронная почта" size="large" />

                            </Form.Item>
                            <Form.Item validateStatus="success" hasFeedback>
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Ваше имя" size="large" />

                            </Form.Item>
                            <Form.Item validateStatus={!touched.password ? "" : errors.password ? 'error' : 'success'} hasFeedback
                                help={!touched.password ? "" : errors.password}>
                                <Input
                                    id="password" name="password" value={values.password} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password" placeholder="Пароль" size="large" />
                            </Form.Item>
                            <Form.Item>
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="repeat-password" placeholder="Повторите пароль" size="large" />
                            </Form.Item>
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