import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { Button, Panel } from '../../../components';
import { Link } from 'react-router-dom';

class SignupForm extends Component {
    render() {
        return (
            <div>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа вам необходимо зарегистрироваться</p>
                </div>
                <Panel>
                    <Form onSubmit={() => { }} className="login-form">
                        <Form.Item validateStatus="success" hasFeedback>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Ваше имя" size="large" />

                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Электронная почта" size="large" />

                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password" placeholder="Пароль" size="large" />
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="repeat-password" placeholder="Повторите пароль" size="large" />
                        </Form.Item>
                        <Form.Item>
                            <Button className="button__large" type="primary" size="large">Зарегистироваться</Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/login">Вход</Link>
                    </Form>
                </Panel>

            </div>
        )
    }

}

const WrappedNormalLoginForm = Form.create({ name: 'signup' })(SignupForm);

export default WrappedNormalLoginForm;