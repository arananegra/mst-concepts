import { TodoStoreProvider } from "./todo.provider";
import { TodoArray } from "./components/todo-array";
import * as React from "react";

export function TodoPage() {
	return (
		<TodoStoreProvider>
			<TodoArray/>
		</TodoStoreProvider>
	)
}
