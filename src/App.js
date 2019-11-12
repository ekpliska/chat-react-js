import React, { Component } from 'react';
import { Button, Panel } from './components';

class App extends Component {
	render() {
		return (
			<div className="main">
				<Panel>
					<Button className="button__large" type="primary" size="large">Click</Button>
				</Panel>
			</div>
		)
	}
}

export default App;
