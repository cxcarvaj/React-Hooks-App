

export const todoReducer = ( initialState = [], action = {} ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            // throw new Error('Action.type = add is not implemented yet');
            return [ ...initialState, action.payload ];
        case '[TODO] Delete Todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                //* action.payload = id
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
    
        default:
            return initialState;
    }
};