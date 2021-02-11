import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routes/home/Home';
import NotFound from './routes/404/NotFound';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
					<Route exact path="/test">
						<h1>test</h1>
					</Route>
					<Route path="/">
						<NotFound/>
					</Route>
				</Switch>
			</Router>
		)
	}
}

export default App;
