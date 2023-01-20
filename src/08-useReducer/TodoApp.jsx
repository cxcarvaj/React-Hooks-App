import { TodoList, TodoAdd} from './components/';
import { useTodo } from '../hooks';

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();

    return (
        <>
            <h1>Todo App: { todosCount } Tasks, <small>Pending: { pendingTodosCount }</small></h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={todos}
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo = { handleToggleTodo }
                    />
                </div>

                <div className='col-5'>
                    <h4>Add TODO</h4>
                    <hr />

                    <TodoAdd 
                        onNewTodo={ handleNewTodo }
                    />
                </div>
            </div>
        </>
    )

};