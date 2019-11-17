import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { Button, Panel } from '../../../components';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <div className="auth__top">
                    <h2>Войти в аккуант</h2>
                    <p>Для входа используйте форму входа</p>
                </div>
                <Panel>
                    <Form onSubmit={() => { }} className="login-form">
                        <Form.Item>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Ваше имя" size="large" />

                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password" placeholder="Пароль" size="large" />
                        </Form.Item>
                        <Form.Item>
                            <Button className="button__large" type="primary" size="large">Войти</Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/signup">Зарегистрироваться</Link>
                    </Form>

                </Panel>

            </div>
        )
    }

}

const WrappedNormalLoginForm = Form.create({ name: 'auth' })(LoginForm);

export default WrappedNormalLoginForm;