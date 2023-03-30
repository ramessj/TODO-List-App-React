import { useRef } from "react";
import { useForm } from "../Hooks/useForm"

export const TodoAdd = ({todos, onNewTodo}) => {

	
	const { onInputChange, onResetForm, newTodoInput} = useForm({
		newTodoInput: '',
	});

	const inputRef = useRef();

	const onFormSubmit = (e) => {
		e.preventDefault();
		if (newTodoInput.length <= 1){
			inputRef.current.select();
			return
		}
		
		const todoExist = todos.find((todo) => todo.description === newTodoInput);

		if(!todoExist){

			const newTodo = {
				id: new Date().getTime(),
				description: newTodoInput,
				done: false
			}
		
			onNewTodo(newTodo)
		
			onResetForm();
		}

	};
	
	return (
		<>
			<form className="d-flex flex-column align-items-center"
			onSubmit={onFormSubmit}
			>
				<input 
				ref={ inputRef }
				type="text" 
				placeholder="¿Qué hay que hacer?"
				className="form-control text-center"
				name='newTodoInput'
				value={newTodoInput}
				onChange={onInputChange}
				/>
				<button 
				type="submit"
				className="btn btn-outline-primary mt-3"
				onClick={(e) => onFormSubmit(e)}
				>
					Agregar
				</button>
			</form>
		</>
	)
}
