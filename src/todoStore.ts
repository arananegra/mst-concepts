import { types } from "mobx-state-tree";
import { TodoPageVm } from "./models/Todo.vm";

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
				id: '1',
				text: 'Test 2'
			},
			{
				id: '1',
				text: 'Test 3'
			},
			{
				id: '1',
				text: 'Test 23'
			}
		]
	}
});

export type ITodoStore = ReturnType<typeof createTodoStore>;
