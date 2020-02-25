import { SnapshotOut, types } from "mobx-state-tree";

export const ValidationResultVm = types
	.model({
		type: types.string,
		succeeded: types.boolean,
		message: types.string,
	})

export interface ValidationResultVm extends SnapshotOut<typeof ValidationResultVm> {
}

ValidationResultVm.actions(self => ({
	updateValidationResult(validationResult: ValidationResultVm) {
		self = {...validationResult};
	},
}))
