import { Instance, types } from "mobx-state-tree";
import { ValidationResultVm } from "../../common/models";
import { login, onBlur, updateCredentials } from './actions';
import { history } from "../../createHistory";
import { routerSwitchRoutes } from "../../core";

export const CredentialsEntity = types
	.model({
		username: types.string,
		password: types.string,
		isUserLogged: types.boolean,
		isLoggingLoading: types.boolean
	}).actions(self => ({
		changeLoginStatus(isLogged: boolean) {
			self.isUserLogged = isLogged;
		},
		changeLoadingStatus(isLoading: boolean) {
			self.isLoggingLoading = isLoading;
		},
		logout() {
			self.isUserLogged = false;
			history.push(routerSwitchRoutes.login)
		}
	}))
	.actions(login)
	.actions(updateCredentials)
	.actions(onBlur)

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



