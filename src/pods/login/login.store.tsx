import { types } from "mobx-state-tree";
import * as React from "react";
import { CredentialsEntity, CredentialsErrors } from "./login.vm";
import { createDefaultValidationResult } from "@lemoncode/fonk";

export const RootLoginStore = types
	.model({
		credentials: CredentialsEntity,
		errors: CredentialsErrors,
	});

export const createLoginStore = () => RootLoginStore.create({
	credentials: {
		username: '',
		password: '',
		isLoggingLoading: false,
		isUserLogged: false
	},
	errors: {
		username: {
			...createDefaultValidationResult()
		},
		password: {
			...createDefaultValidationResult()
		}
	}
});

export type ILoginStore = ReturnType<typeof createLoginStore>;


export const loginPageContext = React.createContext<ILoginStore | null>({
	...createLoginStore()
});

