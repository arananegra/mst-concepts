import * as React from 'react';
import { useObserver } from "mobx-react-lite"
import { Todo } from "./todo";
import { Button } from "@material-ui/core";
import { useTodoStores } from "../hooks/use-stores";

export const TodoArray: React.FC = () => {
	const {todoPage} = useTodoStores();

	return useObserver(() => ((
		<>
			<div style={{display: "flex", justifyContent: "center"}}>
				<Button variant={"contained"} color={"primary"} onClick={todoPage.removeAll}>Remove all items</Button>
			</div>
			{todoPage.todos.map((item) =>
				<div style={{marginBottom: '10px'}} key={item.id}>
					<Todo item={item}/>
				</div>
			)}
		</>
	)));
}
