import { ITodoSnap } from "./models/todo.vm";

export const loadTodos = (): Promise<ITodoSnap[]> => {
	return new Promise<ITodoSnap[]>((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{
					id: '1',
					dateOfCompletion: null,
					text: 'Test 1',
					done: false
				}
			])
		}, 1000)
	})
}
