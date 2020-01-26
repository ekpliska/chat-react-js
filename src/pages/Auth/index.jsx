import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { LoginForm, SignupForm } from '../../modules';
import CheckEmail from './component/CheckEmail';
import './Auth.scss';

const Auth = () => {

    return (
        <section className="auth">
            <div className="auth__content">
                <Route exact path={["/", "/login"]} component={LoginForm} />
                <Route exact path="/signup" component={SignupForm} /* render={() => <h2>signup</h2>} */ />
                <Route exact path="/signup/check" component={CheckEmail} />
            </div>
        </section>
    )
}

export default Auth;