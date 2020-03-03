import { TodoArray } from "./components/todo-array";
import * as React from "react";
import { ITodoPage, ITodoSnapInPage, TodoPageVm } from "./todo-page.vm";
import { TodoCreator } from "./components/todo-creator";
import makeInspectable from 'mobx-devtools-mst';
import { useLoginStore } from "../login/hooks/use-login.store";
import { Button } from "@material-ui/core";

let initialState: ITodoSnapInPage = {
	todoArray: {
		todos: [],
	}
}

let todoPage: ITodoPage = TodoPageVm.create(initialState)
makeInspectable(todoPage)

export function TodoPage() {
	return (
		<>
			<div style={{display: "flex", justifyContent: "space-around"}}>
				<div>
					<TodoArray todoArray={todoPage.todoArray}/>
				</div>
				<div>
					<TodoCreator todoArray={todoPage.todoArray}/>
				</div>
			</div>
		</>
	)
}
