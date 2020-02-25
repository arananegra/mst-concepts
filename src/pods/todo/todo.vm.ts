import { destroy, getParent, Instance, types } from "mobx-state-tree";
import moment from "moment";

export const TodoVm = types
	.model({
		id: types.identifier,
		text: types.string,
		dateOfCompletion: types.maybeNull(types.number),
		done: false
	})
	.actions(self => ({
		changeText(newText) {
			self.text = newText
		},
		changeDateOfCompletion(newDate) {
			self.dateOfCompletion = newDate
		},
		remove() {
			getParent<typeof TodoPageVm>(self, 2).remove(self)
		},
		changeCheckDoneStatus(status: boolean) {
			self.done = status;
			if (status) {
				self.dateOfCompletion = Date.now();
			} else {
				self.dateOfCompletion = null;
			}
		}
	}))
	.views(self => ({
		get parsedDateOfCompletion() {
			return self.dateOfCompletion ? 'Done in ' + moment(self.dateOfCompletion).format("MM/DD/YYYY") : "--"
		}
	}))

export interface ITodo extends Instance<typeof TodoVm> {
}

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
	.views(self => ({
		get allItemsRemoved() {
			return self.todos.length === 0
		}
	}))
