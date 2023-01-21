import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks';

describe('Tests in the useForm hook', () => {

    const initialForm = {
        name: 'Carlos C',
        email: 'carlos.c@gmail.com'
    }

    test('should return the default values', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });

    });

    test('should change the name property of the form', () => {

        const newName = 'Freddy P.';

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;

        const target = { name: 'name', value: newName }

        act(()=>{
            onInputChange({ target });
        })

        expect( result.current.name ).toBe( newName );
        expect( result.current.formState.name ).toBe( newName );

    });

    test('should reset form values', () => {

        const newName = 'Freddy P.';

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;

        const target = { name: 'name', value: newName }

        act(()=>{
            onInputChange({ target });
            onResetForm();
        })

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

    });

});