import * as React from 'react';
import { AppBar, createStyles, Theme } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useLoginStore } from "../pods/login/hooks/use-login.store";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	}),
);


export const TodoLayout: React.FC = (props) => {
	const classes = useStyles();
	const {credentials} = useLoginStore();
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						TODO LIST
					</Typography>
					<Button color="inherit" onClick={credentials.logout}>Logout</Button>
				</Toolbar>
			</AppBar>
			<div style={{paddingTop: '20px'}}>{props.children}</div>
		</>
	)
}
