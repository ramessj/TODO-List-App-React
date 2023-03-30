
export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
	return (
		<>
			<li className="list-group-item d-flex justify-content-between"
			key={todo.id}>
				<div className="d-flex gap-4 align-items-center">
					<input 
					className="form-check-input fs-4 "
					type="checkbox" 
					title="completed"
					checked={todo.done}
					onChange={ () => onToggleTodo( todo.id ) }
					/>
					<span 
						className={`fs-5 ${ (todo.done) ? 'text-decoration-line-through' : ''}`}					
					>
						{todo.description}
					</span>
				</div>
				<button 
					type="button"
					className="btn btn-danger align-se"
					onClick={ () => onDeleteTodo( todo.id ) }
				>
					Borrar
				</button>
			</li>
		</>
	)
}
