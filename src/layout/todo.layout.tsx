import * as React from 'react';

// TODO: move styles to css in js
export const TodoLayout: React.FC = (props) => {
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
				{props.children}
			</div>
		</>
	)
}
