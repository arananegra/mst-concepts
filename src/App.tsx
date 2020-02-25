import React from 'react';
import './App.css';
import { TodoArray } from "./pods/todo/components/todo-array";
import { TodoStoreProvider } from "./pods/todo/todo.provider";


function App() {
	return (
		<>
			<h1 style={{width: '100%', textAlign: "center"}}>Todos for doing</h1>
			<div style={{
				display: "flex",
				flexDirection: 'column',
				alignItems: 'flex-start',
				marginLeft: '10%',
				textAlign: "center"
			}}>
				<TodoStoreProvider>
					<TodoArray/>
				</TodoStoreProvider>
			</div>
		</>
	);
}

export default App;
