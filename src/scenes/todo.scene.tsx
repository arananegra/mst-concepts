import * as React from "react";
import { TodoLayout } from "../layout";
import { TodoPage } from "../pods/todo";

export default function TodoScene() {
	return (
		<TodoLayout>
			<TodoPage/>
		</TodoLayout>
	)
}
