import * as React from 'react';
import { useObserver } from "mobx-react-lite"
import { Todo } from "./todo";
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ITodoArray } from "../models/todo-array.vm";

interface Props {
	todoArray: ITodoArray;
}

export const TodoArray: React.FC<Props> = (props) => {
	const {todoArray} = props;

	React.useEffect(() => {
		todoArray.load()
	}, [todoArray])

	return useObserver(() => ((
		<>
			<div style={{display: "flex", justifyContent: "center"}}>
				<Button disabled={todoArray.allItemsRemoved} variant={"contained"} color={"primary"}
								onClick={todoArray.removeAll}>Remove all items</Button>
			</div>
			{todoArray.loadingTodos ?
				<div>
					<CircularProgress/></div> :
				todoArray.todos?.map((item) =>
					<div style={{marginBottom: '10px'}} key={item.id}>
						<Todo item={item}/>
					</div>
				)
			}

		</>
	)));
}
