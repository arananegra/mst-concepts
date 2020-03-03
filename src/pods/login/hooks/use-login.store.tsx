import React from 'react'
import { loginPageContext } from "../login.store";

export const useLoginStore = () => {
	const store = React.useContext(loginPageContext);
	if (!store) {
		// this is especially useful in TypeScript so you don't need to be checking for null all the time
		throw new Error("useTodoStores must be used within a StoreProvider.");
	}
	return store;
};
