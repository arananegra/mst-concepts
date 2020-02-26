import React from 'react';
import './App.css';
import LoginScene from "./scenes/login.scene";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { routerSwitchRoutes } from "./core";
import { LoginStoreProvider } from "./pods/login/login.provider";
import { PrivateRoute } from "./common/components/PrivateRoute";
import TodoScene from "./scenes/todo.scene";


function App() {
	return (
		<LoginStoreProvider>
			<Router>
				<Switch>
					<Route exact path={routerSwitchRoutes.login}
								 component={LoginScene}/>
					<PrivateRoute exact={true} path={routerSwitchRoutes.todos}
												component={TodoScene}/>
					<PrivateRoute exact={true} path={'/test'}
												component={Test}/>
				</Switch>
			</Router>
		</LoginStoreProvider>
	);
}

export default App;

function Test() {
return (
	<div><h1>
		Hola
	</h1></div>
)
}
