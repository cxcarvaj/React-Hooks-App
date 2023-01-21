import { useEffect, useReducer, useState } from 'react';

import { todoReducer } from '../08-useReducer/todoReducer';


const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) )?? [];
};

export const useTodo = () => {

    // const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, init );
    const [ todos, dispatchTodo ] = useReducer( todoReducer, [] , init );

    useEffect(() => {

        localStorage.setItem( 'todos', JSON.stringify( todos ) ?? []);

    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        };

        dispatchTodo( action );
    };

    const handleDeleteTodo = ( todoId ) => {
        
        const action = {
            type: '[TODO] Delete Todo',
            payload: todoId,
        };

        dispatchTodo( action );
    };

    const handleToggleTodo = ( todoId ) => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: todoId,
        };
    
        dispatchTodo( action );
    };


    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

};


