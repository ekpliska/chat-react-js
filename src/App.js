import React, { Component } from 'react';
import { Button } from './components';

class App extends Component {
	render() {
		return (
			<div>
				<Button className="button__large" type="primary" size="large">Click</Button>
			</div>
		)
	}
}

export default App;
