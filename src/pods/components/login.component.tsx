import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import * as React from "react";
import { useStyles } from "../login/login.styles";
import { useLoginStore } from '../hooks/use-stores';
import { TextFieldMui } from "../../common/components/text-field-mui.component";
import { useObserver } from "mobx-react-lite";
import { CircularProgress } from "@material-ui/core";

export const LoginComponent = () => {
	const classes = useStyles();
	const {credentials, errors} = useLoginStore();

	return useObserver(() => ((
		<div>
			<Card>
				<CardHeader className={classes.tittle} title="login"/>
				<CardContent>
					<div className={classes.formContainer}>
						<TextFieldMui
							label="Username"
							name="username"
							value={credentials.username}
							onBlur={credentials.onBlurFields}
							onChange={credentials.updateCredentials}
							error={errors.username.message}
						/>
						<TextFieldMui
							label="Password"
							name="password"
							type="password"
							value={credentials.password}
							onBlur={credentials.onBlurFields}
							onChange={credentials.updateCredentials}
							error={errors.password.message}
						/>
						{credentials.isLoggingLoading ?
							<div style={{display: "flex", justifyContent: "center"}}><CircularProgress/></div> :
							<Button
								onClick={credentials.login}
								type="submit"
								style={{outline: 'none'}}
								variant="contained"
								color="primary">
								Login
							</Button>
						}
					</div>
				</CardContent>
			</Card>
		</div>
	)));
}
