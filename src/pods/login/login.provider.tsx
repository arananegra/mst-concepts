import * as React from "react";
import { createLoginStore, loginPageContext } from "./login.store";
import makeInspectable from 'mobx-devtools-mst';

export const LoginStoreProvider = ({children}) => {
	const loginStore = createLoginStore();
	makeInspectable(loginStore)

	return (
		<loginPageContext.Provider value={loginStore}>{children}</loginPageContext.Provider>
	);
};
