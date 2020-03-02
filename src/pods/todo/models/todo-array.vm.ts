import { applySnapshot, destroy, flow, Instance, types } from "mobx-state-tree";
import { loadTodos } from "../todo.api";
import { ITodoSnap, TodoVm } from "./todo.vm";

export const TodoArrayVm = types
	.model({
		todos: types.optional(types.array(TodoVm) ,[]),
		isLoadingTodos: false
	})
	.actions(self => ({
		load: flow(function* load() {
			self.isLoadingTodos = true;
			const response = yield loadTodos();
			applySnapshot(self.todos, response)
			self.isLoadingTodos = false;
		}),
		add(todoText) {
			const todoToAdd: ITodoSnap = {
				id: String('_' + Math.random().toString(36).substr(2, 9)),
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
