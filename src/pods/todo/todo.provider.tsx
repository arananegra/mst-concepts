import { useLocalStore } from "mobx-react-lite";
import * as React from "react";
import { createTodoStore, todoPageContext } from "./todo.store";
import makeInspectable from 'mobx-devtools-mst';

export const TodoStoreProvider = ({children}) => {
	const todoStore = useLocalStore(createTodoStore);
	makeInspectable(todoStore)
	return (
		<todoPageContext.Provider value={todoStore}>{children}</todoPageContext.Provider>
	);
};
