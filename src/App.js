import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Auth, Chat } from './pages';

class App extends Component {
	render() {
		return (
			<div className="main">
				<Route exact path={["/", "/login"]} component={Auth} />
				<Route exact path={"/chat"} component={Chat} />
			</div>
		)
	}
}

export default App;
