import * as React from 'react';
import { useObserver } from "mobx-react-lite"
import { ITodoArray } from "../models/todo-array.vm";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

interface Props {
	todoArray: ITodoArray
}

export const TodoCreator: React.FC<Props> = (props) => {
	const {todoArray} = props;
	const [todoTitle, setTodoTitle] = React.useState("")

	return useObserver(() => ((
		<>
			<Paper elevation={4}
						 style={{width: '300px', padding: '5px', display: "flex", alignItems: "center", flexDirection: "column"}}>

				<TextField name={'todoTitle'} onChange={(event => setTodoTitle(event.target.value))}
									 placeholder={"Todo title to add"}
									 value={todoTitle}
									 style={{paddingBottom: '15px'}}/>

				<Button disabled={todoTitle === ""} style={{marginBottom: '10px'}} onClick={() => {
					todoArray.add(todoTitle)
					setTodoTitle("")
				}} variant={"contained"}
								color={"primary"}>Add todo</Button>

			</Paper>
		</>
	)));
}
