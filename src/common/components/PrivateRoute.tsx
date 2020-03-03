import * as React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { routerSwitchRoutes } from "../../core";
import { useObserver } from "mobx-react-lite";
import { useLoginStore } from "../../pods/login/hooks/use-login.store";

export const PrivateRoute = ({component: Component, ...rest}) => {
	const {credentials} = useLoginStore();
	return useObserver(() => ((
		<Route {...rest} render={(props) => (
			credentials.isUserLogged
				? <Component {...props}/>
				: <Redirect to={{
					pathname: routerSwitchRoutes.login,
					state: {from: props.location}
				}}/>
		)}/>
	)))
};
