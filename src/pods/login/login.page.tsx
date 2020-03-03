import * as React from "react";
import { LoginComponent } from "./components/login.component";
import { Redirect, useLocation } from "react-router-dom";
import { routerSwitchRoutes } from "../../core";
import { observer } from 'mobx-react-lite'
import { useLoginStore } from "./hooks/use-login.store";


export const LoginPage = observer(() => {
		const {credentials} = useLoginStore();
		const location = useLocation() as any;

		let fromObject;
		if (location.state) {
			fromObject = location.state.from;
		} else {
			fromObject = {pathname: routerSwitchRoutes.todos};
		}

		if (credentials.isUserLogged) {
			return <Redirect to={fromObject}/>
		} else {
			return (
				<>
					<LoginComponent/>
				</>
			);
		}
	}
)
