import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {


    const { formState, onInputChange, onResetForm }  = useForm({
        description: '',

    });

    const { description } = formState;

    const onFormSubmit = (event) => {
        event.preventDefault();

        if( description.trim().length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        };

        onNewTodo( newTodo );
        onResetForm();

    };

    return (
        <>
            <form onSubmit={ onFormSubmit }>
                <input
                    type='text'
                    placeholder='What do you want to do?'
                    className='form-control'
                    name='description'
                    value={ formState.description }
                    onChange={ onInputChange }
                />

                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1'
                >
                    Add
                </button>
            </form>
        </>
    );


};