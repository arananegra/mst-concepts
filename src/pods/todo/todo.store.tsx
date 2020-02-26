import { types } from "mobx-state-tree";
import { TodoPageVm } from "./todo.vm";
import * as React from "react";

const RootTodoStore = types
	.model({
		todoPage: TodoPageVm
	});

export const createTodoStore = () => RootTodoStore.create({
	todoPage: {
		todos: [
			{
				id: '1',
				text: 'Test 1'
			},
			{
				id: '2',
				text: 'Test 2'
			},
			{
				id: '3',
				text: 'Test 3'
			},
			{
				id: '4',
				text: 'Test 23'
			}
		]
	}
});

export type ITodoStore = ReturnType<typeof createTodoStore>;


export const todoPageContext = React.createContext<ITodoStore | null>({
	...createTodoStore()
});

