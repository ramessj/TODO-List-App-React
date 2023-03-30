import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const init = () => {

	return JSON.parse(localStorage.getItem('Todos')) || [];
}

export const useTodo = () => {
	

	const [todos, dispatchTodoAction] = useReducer(todoReducer, [], init);


		
	useEffect(() => {		
	
		localStorage.setItem('Todos', JSON.stringify(todos));
		
	}, [todos])

	const handleNewTodo = (newTodo) => {

		const action = {
			type: '[TODO] Add Todo',
			payload: newTodo
		};

		dispatchTodoAction(action);
	}

	const handleDeleteTodo = ( id ) => {
		dispatchTodoAction({
			type: '[TODO] Remove Todo',
			payload: id
		})
		
	}

	const handleToggleTodo = ( id ) => {
		dispatchTodoAction({
			type: '[TODO] Toggle Todo',
			payload: id
		})
	}
	
	return {
		todos,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,		
		todosCount: todos.length,
		pendingTodosCount: todos.filter(todo=> !todo.done).length,		

	}
}
