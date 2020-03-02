import { applySnapshot, destroy, flow, Instance, types } from "mobx-state-tree";
import { loadTodos } from "../todo.api";
import { ITodoSnap, TodoVm } from "./todo.vm";

export const TodoArrayVm = types
	.model({
		todos: types.optional(types.array(TodoVm) ,[]),
		loadingTodos: false
	})
	.actions(self => ({
		load: flow(function* load() {
			self.loadingTodos = true;
			const response = yield loadTodos();
			applySnapshot(self.todos, response)
			self.loadingTodos = false;
		}),
		add(todoText) {
			const todoToAdd: ITodoSnap = {
				id: String(self.todos.length) + todoText,
				dateOfCompletion: null,
				done: false,
				text: todoText
			}
			self.todos.push(todoToAdd)
		},
		remove(todo) {
			destroy(todo)
		},
		removeAll() {
			destroy(self.todos)
		}
	}))
	.views(self => ({
		get allItemsRemoved() {
			return (self.todos.length === 0)
		}
	}))

export interface ITodoArray extends Instance<typeof TodoArrayVm> {
}
