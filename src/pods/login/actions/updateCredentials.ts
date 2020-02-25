import { CredentialsEntityVm } from '../login.vm'
import { flow, getParent } from "mobx-state-tree";
import { ValidationResult } from "@lemoncode/fonk";
import { loginFormValidation } from "../login.validation";
import { RootLoginStore } from "../login.store";

export const updateCredentials = (self: CredentialsEntityVm) => ({
	updateCredentials: flow(function* updateCredentials(fieldId: string, value: string) {
		self[fieldId] = value;
		const fieldValidationResult: ValidationResult = yield loginFormValidation.validateField(fieldId, value);
		getParent<typeof RootLoginStore>(self, 1).errors.updateValidationErrors(fieldId, fieldValidationResult);
	}),
});
