import { onSnapshot, SnapshotOut, types } from "mobx-state-tree";
import * as React from "react";
import { CredentialsEntity, CredentialsEntityVm, CredentialsErrors } from "./login.vm";
import { createDefaultValidationResult } from "@lemoncode/fonk";

export const RootLoginStore = types
	.model({
		credentials: CredentialsEntity,
		errors: CredentialsErrors,
	});

export interface IRootLoginStore extends SnapshotOut<typeof RootLoginStore> {
}

let initialCredentialsState: CredentialsEntityVm = {
	username: '',
	password: '',
	isLoggingLoading: false,
	isUserLogged: false
}


let initialState: IRootLoginStore = {
	credentials: {...initialCredentialsState},
	errors: {
		username: {
			...createDefaultValidationResult()
		},
		password: {
			...createDefaultValidationResult()
		}
	}

}

export const createLoginStore = () => {
	if (localStorage.getItem("credentialsStore")) {
		const json = JSON.parse(localStorage.getItem("credentialsStore"));
		if (CredentialsEntity.is(json)) {
			initialState = {
				...initialState,
				credentials: {...json}
			}
		}
	}


	const loginVm = RootLoginStore.create(initialState);

	onSnapshot(loginVm.credentials, snapshot => {
		localStorage.setItem("credentialsStore", JSON.stringify(snapshot))
	});
	return loginVm
};

export type ILoginStore = ReturnType<typeof createLoginStore>;


export const loginPageContext = React.createContext<ILoginStore | null>({
	...createLoginStore()
});

