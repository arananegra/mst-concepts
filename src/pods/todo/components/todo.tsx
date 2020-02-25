import * as React from 'react';
import { ITodo } from '../todo.vm'
import Paper from "@material-ui/core/Paper";
import { useObserver } from "mobx-react-lite"
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

interface Props {
	item: ITodo;
}

export const Todo: React.FC<Props> = (props) => {
	const {item} = props;
	return useObserver(() => ((
		<Paper elevation={4}
					 style={{width: '300px', padding: '5px', display: "flex", alignItems: "center", flexDirection: "column"}}>
			<h2>{item.text}</h2>
			<h2>{item.parsedDateOfCompletion}</h2>
			<FormControlLabel
				control={
					<Checkbox checked={item.done} onChange={(
						event, checked) =>
						item.changeCheckDoneStatus(checked)
					} value="checkedA"/>
				}
				label="Mark as done"
			/>
			<Button style={{marginBottom: '10px'}} onClick={item.remove} variant={"contained"} color={"secondary"}>Remove todo</Button>
		</Paper>
	)));
}
