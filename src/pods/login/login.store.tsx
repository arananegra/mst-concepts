import { onSnapshot, SnapshotOut, types } from "mobx-state-tree";
import * as React from "react";
import { CredentialsEntity, CredentialsErrors } from "./login.vm";
import { createDefaultValidationResult } from "@lemoncode/fonk";

export const RootLoginStore = types
	.model({
		credentials: CredentialsEntity,
		errors: CredentialsErrors,
	});

export interface IRootLoginStore extends SnapshotOut<typeof RootLoginStore> {
}

let initialState: IRootLoginStore = {
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

}

export const createLoginStore = () => {
	if (localStorage.getItem("loginStore")) {
		const json = JSON.parse(localStorage.getItem("loginStore"));
		if (RootLoginStore.is(json)) initialState = json as IRootLoginStore
	}

	const loginVm = RootLoginStore.create(initialState);

	onSnapshot(loginVm, snapshot => {
		localStorage.setItem("loginStore", JSON.stringify(snapshot))
	});
	return loginVm
};

export type ILoginStore = ReturnType<typeof createLoginStore>;


export const loginPageContext = React.createContext<ILoginStore | null>({
	...createLoginStore()
});

