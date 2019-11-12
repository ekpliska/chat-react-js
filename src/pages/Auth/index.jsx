import React from 'react';
import { Panel, Button } from '../../components';
import './Auth.scss';

const Auth = () => {
    return (
        <section className="auth">
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Войти в аккуант</h2>
                    <p>Для входа используйте форму входа</p>
                </div>
                <Panel className="">
                    <Button className="button__large" type="primary" size="large">Click</Button>
                </Panel>
            </div>
        </section>
    )
}

export default Auth;