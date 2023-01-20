import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm(
        {
            username: '',
            email: '',
            password: ''
        }
    );

    // const { username, email, password } = formState;

    return (
        <>
            <h1>Form with Custom Hook</h1>
            <hr />

            <input
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ onInputChange }

            />
            
            <input
                type='email'
                className='form-control mt-4'
                placeholder='email@domain.com'
                name='email'
                value={ email }
                onChange={ onInputChange }

            />
            
            <input
                type='password'
                className='form-control mt-4'
                placeholder='********'
                name='password'
                value={ password }
                onChange={ onInputChange }

            />

            <button 
                className="btn btn-primary mt-4"
                onClick={ onResetForm }
                > Delete </button>
        </>
    )
}