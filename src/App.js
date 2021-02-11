import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<h1>Home</h1>
					</Route>
					<Route exact path="/test">
						<h1>test</h1>
					</Route>
					<Route path="/">
						<h1>404</h1>
					</Route>
				</Switch>
			</Router>
		)
	}
}

export default App;
