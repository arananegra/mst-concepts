import { CredentialsEntityVm } from '../login.vm'
import { flow, getParent } from "mobx-state-tree";
import { ValidationResult } from "@lemoncode/fonk";
import { loginFormValidation } from "../login.validation";
import { RootLoginStore } from "../login.store";

export const onBlur = (self: CredentialsEntityVm) => ({
	onBlur: flow(function* onBlur(fieldId: string, value: string) {
		const fieldValidationResult: ValidationResult = yield loginFormValidation.validateField(fieldId, value);
		getParent<typeof RootLoginStore>(self, 1).errors.updateValidationErrors(fieldId, fieldValidationResult);
	})
})
