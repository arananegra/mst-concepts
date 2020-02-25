import { useLocalStore } from "mobx-react-lite";
import * as React from "react";
import { createTodoStore, todoPageContext } from "./todo.store";

export const TodoStoreProvider = ({children}) => {
	const todoStore = useLocalStore(createTodoStore);
	return (
		<todoPageContext.Provider value={todoStore}>{children}</todoPageContext.Provider>
	);
};
