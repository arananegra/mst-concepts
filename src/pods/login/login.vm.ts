import { flow, getParent, Instance, types } from "mobx-state-tree";
import { ValidationResultVm } from "../../common/models";
import { loginFormValidation } from "./login.validation";
import { FormValidationResult, ValidationResult } from '@lemoncode/fonk';
import { RootLoginStore } from "./login.store";
import { toast } from "react-toastify";
import { validateCredentials } from "./login.api";

export const CredentialsEntity = types
	.model({
		username: types.string,
		password: types.string,
		isUserLogged: types.boolean,
		isLoggingLoading: types.boolean
	}).actions(self => ({
		updateCredentials(fieldId: string, value: string) {
			self[fieldId] = value;
		},
		changeLoginStatus(isLogged: boolean) {
			self.isUserLogged = isLogged;
		},
		changeLoadingStatus(isLoading: boolean) {
			self.isLoggingLoading = isLoading;
		},
		login: flow(function* onLogin() {
			self.isLoggingLoading = true;
			const formValidationResult: FormValidationResult = yield loginFormValidation.validateForm({
				username: self.username,
				password: self.password
			});

			if (formValidationResult.succeeded) {
				const areValidCredentials = yield validateCredentials(self.username, self.password)
				if (areValidCredentials) {
					self.isLoggingLoading = false;
					toast.success("WWUWUWUW");
				} else {
					self.isLoggingLoading = false;
					toast.error("Wrong credentials");
				}
			} else {
				self.isLoggingLoading = false;
				toast.warn("Wrong fields present");
			}
		}),
		onBlurFields: flow(function* onBlurFields(fieldId: string, value: string) {
			const fieldValidationResult: ValidationResult = yield loginFormValidation.validateField(fieldId, value);
			getParent<typeof RootLoginStore>(self, 1).errors.updateValidationErrors(fieldId, fieldValidationResult);
		})
	}))

export interface CredentialsEntityVm extends Instance<typeof CredentialsEntity> {
}

export const CredentialsErrors = types
	.model({
		username: ValidationResultVm,
		password: ValidationResultVm,
	})
	.actions(self => ({
		updateValidationErrors(fieldId: string, validationResult: ValidationResultVm) {
			self[fieldId] = validationResult;
		},
	}))

export interface CredentialsErrorVm extends Instance<typeof CredentialsErrors> {
}

/*const getErrors = (self: IAnyStateTreeNode) =>
	getEnv<{ credentialErrors: CredentialsErrorVm }>(self).credentialErrors;*/


