import * as React from "react";
import { CenteredLayout } from "../layout/centered.layout";
import { LoginPage } from "../pods/login/login.page";

export default function LoginScene() {
	return (
		<CenteredLayout>
			<LoginPage/>
		</CenteredLayout>
	)
}
