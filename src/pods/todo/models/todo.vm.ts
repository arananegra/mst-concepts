import { getParent, Instance, SnapshotOut, types } from "mobx-state-tree";
import moment from "moment";
import { TodoArrayVm } from "./todo-array.vm";

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
			getParent<typeof TodoArrayVm>(self, 2).remove(self)
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
			return self.dateOfCompletion ? 'Done: ' + moment(self.dateOfCompletion).format("MM/DD/YYYY") : "--"
		}
	}))

export interface ITodo extends Instance<typeof TodoVm> {
}

export interface ITodoSnap extends SnapshotOut<typeof TodoVm> {
}
