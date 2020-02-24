import * as React from "react";
import { useLocalStore } from "mobx-react-lite";
import { createTodoStore } from "./todoStore";
import {todoPageContext} from './contexts'

export const TodoStoreProvider = ({ children }) => {
	const todoStore = useLocalStore(createTodoStore);
	return (
		<todoPageContext.Provider value={todoStore}>{children}</todoPageContext.Provider>
	);
};
