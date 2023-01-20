import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'coolest_username',
        email: 'coolest_username@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    };

    useEffect(() => {
        // console.log('hey useEffect');
    }, []);

    useEffect(() => {
        // console.log('formState changed');
    }, [ formState ]);

    useEffect(() => {
        // console.log('email changed');
    }, [ email ]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ onInputChange }

            />
            
           {
                (username === 'coolest_username') && <Message />
           }

            <input
                type='email'
                className='form-control mt-4'
                placeholder='email@domain.com'
                name='email'
                value={ email }
                onChange={ onInputChange }

            />

        </>
    )
}