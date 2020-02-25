import { Instance, types, flow, getParent } from "mobx-state-tree";
import { ValidationResultVm } from "../../common/models";
import { loginFormValidation } from "./login.validation";
import {ValidationResult} from '@lemoncode/fonk';
import { TodoPageVm } from "../todo/todo.vm";
import { RootLoginStore } from "./login.store";

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
		login() {

		},
		onBlurFields: flow(function* onBlurFields(fieldId: string, value: string)  {
			const fieldValidationResult: ValidationResult =  yield loginFormValidation.validateField(fieldId, value);
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
