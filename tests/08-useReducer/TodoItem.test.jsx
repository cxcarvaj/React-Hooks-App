import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from "../../src/08-useReducer/components";


describe('Tests on the <TodoItem /> component', () => {

    const todo = {
        id: 1,
        description: 'Learn React',
        done: false
    };

    const onDeleteTodoMock = jest.fn();

    const onToggleTodoMock = jest.fn();

    beforeEach(() =>  jest.clearAllMocks() );

    test('should show the pending TODO', () => {

        render(
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');


        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');

    });

    test('should show the TODO completed', () => {

        todo.done = true;

        render(
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');

        expect( spanElement.className ).toContain('text-decoration-line-through');

    });

    test('should call the ToggleTodo function when the user perform a click', () => {

        render(
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');

        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalled();
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    });

    test('the delete button should call the onDeleteTodo function when the user perform a click', () => {

        render(
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const deleteButton = screen.getByRole( 'button', { name: 'Delete' });

        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalled();
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    });
});