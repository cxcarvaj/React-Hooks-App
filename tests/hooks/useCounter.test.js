import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

describe('Tests in the useCounter hook', () => {

    test('should return default values', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe( 10 );

        expect( increment ).toEqual( expect.any( Function ) );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

    });

    test('should have the counter in 100', () => {

        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter } = result.current;

        expect( counter ).toBe( 100 );


    });

});