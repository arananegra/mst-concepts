import React from 'react'
import { todoPageContext } from "../todo.store";

export const useTodoStores = () => {
	const store = React.useContext(todoPageContext);
	if (!store) {
		// this is especially useful in TypeScript so you don't need to be checking for null all the time
		throw new Error("useTodoStores must be used within a StoreProvider.");
	}
	return store;
};
