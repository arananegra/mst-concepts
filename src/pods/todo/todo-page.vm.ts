import { Instance, SnapshotIn, types } from "mobx-state-tree";
import { TodoArrayVm } from "./models/todo-array.vm";

export const TodoPageVm = types
	.model({
		todoArray: TodoArrayVm,
	})


export interface ITodoPage extends Instance<typeof TodoPageVm> {
}

export interface ITodoSnapInPage extends SnapshotIn<typeof TodoPageVm> {
}
