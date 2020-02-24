import * as React from 'react';
import { useObserver } from "mobx-react-lite"

export const TodoCreator: React.FC = () => {
	return useObserver(() => ((
		<>

		</>
	)));
}
