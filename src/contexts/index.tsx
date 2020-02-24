import * as React from "react";
import { createTodoStore, ITodoStore } from "../todoStore";

export const todoPageContext = React.createContext<ITodoStore | null>({
	...createTodoStore()
});
