import { render, screen, fireEvent } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks';

jest.mock('../../src/hooks/useTodo');

describe('Tests on the <TodoApp /> component', () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Learn React', done: true },
            { id: 2, description: 'Learn Nest.js', done: false },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    });

    test('should show the component correctly', () => {
        
        render(<TodoApp />);

        const completeTodo = screen.getByText('Learn React');
        const pendingTodo = screen.getByText('Learn Nest.js');
        const todoDescription = screen.getByRole('textbox');

        expect( completeTodo ).toBeTruthy();
        expect( pendingTodo ).toBeTruthy();
        expect( todoDescription ).toBeTruthy();

    });

});