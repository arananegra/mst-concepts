import { destroy, Instance, types } from "mobx-state-tree";
import { TodoVm } from "./models/Todo.vm";

export const TodoPageVm = types
	.model({
		todos: types.optional(types.array(TodoVm), [])
	})
	.actions(self => ({
		add(todo) {
			self.todos.push(todo)
		},
		remove(todo) {
			destroy(todo)
		},
		removeAll() {
			destroy(self.todos)
		}
	}))

export interface ITodoPage extends Instance<typeof TodoPageVm> {
}

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
				text: 'Test'
			}
		]
	}
});

export type ITodoStore = ReturnType<typeof createTodoStore>;
