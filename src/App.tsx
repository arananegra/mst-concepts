import React from 'react';
import './App.css';
import { TodoStoreProvider } from "./stores/StoreProvider";
import { TodoArray } from "./components/todo-array";


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
