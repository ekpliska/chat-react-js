import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Auth, Chat } from './pages';

const App = (props) => {
	const { isAuth } = props;
	console.log('isAuth', isAuth);
	
	return (
		<div className="main">
			<Route exact path={["/login", "/signup"]} component={Auth} />
			<Route exact path={"/chat"} component={Chat} />
			<Route exact path="/" render={ () => isAuth ? <Chat /> : <Redirect to="/login" /> } />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.user.isAuth
	}
}

export default connect(mapStateToProps, null)(App);
