import { CredentialsEntityVm } from '../login.vm'
import { flow, getParent } from "mobx-state-tree";
import { FormValidationResult, ValidationResult } from "@lemoncode/fonk";
import { loginFormValidation } from "../login.validation";
import { RootLoginStore } from "../login.store";
import { validateCredentials } from "../login.api";
import { toast } from "react-toastify";

export const login = (self: CredentialsEntityVm) => ({
	login: flow(function* onLogin() {
		self.changeLoadingStatus(true);
		try {
			const formValidationResult: FormValidationResult = yield loginFormValidation.validateForm({
				username: self.username,
				password: self.password
			});

			for (let fieldOfError in formValidationResult.fieldErrors) {
				const fieldValidationResult: ValidationResult = yield loginFormValidation.validateField(fieldOfError, self[fieldOfError]);
				getParent<typeof RootLoginStore>(self, 1).errors.updateValidationErrors(fieldOfError, fieldValidationResult);
			}

			if (formValidationResult.succeeded) {
				const areValidCredentials = yield validateCredentials(self.username, self.password)
				if (areValidCredentials) {
					self.changeLoadingStatus(false);
					self.changeLoginStatus(true);
					toast.success("WWUWUWUWss");
				} else {
					self.changeLoadingStatus(false);
					toast.error("Wrong credentials");
				}
			} else {
				self.changeLoadingStatus(false);
				toast.warn("Wrong fields present");
			}
		} catch (e) {
			self.changeLoadingStatus(false);
			toast.error("Something went wrong");
		}
	}),
})
