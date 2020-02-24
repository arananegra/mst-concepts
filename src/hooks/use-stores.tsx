import React from 'react'
import { todoPageContext } from '../contexts'

export const useTodoStores = () => {
	const store = React.useContext(todoPageContext);
	if (!store) {
		// this is especially useful in TypeScript so you don't need to be checking for null all the time
		throw new Error("useStore must be used within a StoreProvider.");
	}
	return store;
};
