import { TodoList, TodoAdd } from './Components/';
import { useTodo } from './hooks/useTodo';


export const TodoApp = () => {

	const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo();

	// 

	return (
		<>
			<div className="row d-flex justify-content-center">

				<h1 className="d-flex justify-content-center mt-4">
					Tareas: {todosCount} {todosCount > 0 ? `- Pendientes: ${pendingTodosCount}` : ''}
				</h1>

				<div className="mt-4 align-items-center d-flex flex-column">
					<TodoAdd todos={todos} onNewTodo={handleNewTodo}/>					
				</div>

				<div className="mt-5"
				style={{maxWidth: '60rem'}}>					
					<TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
				</div>			
			</div>
		</>
	)
}
