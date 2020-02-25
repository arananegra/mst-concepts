import * as React from "react";
import { LoginComponent } from "../components/login.component";
import { LoginStoreProvider } from "./login.provider";

export const LoginPage = () => {
	return (
		<>
			<LoginStoreProvider>
				<LoginComponent/>
			</LoginStoreProvider>
		</>
	);
}

