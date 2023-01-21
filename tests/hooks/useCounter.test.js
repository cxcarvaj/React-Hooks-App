import { renderHook, act } from '@testing-library/react';
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

    test('should increment the counter', () => {

        const { result } = renderHook( () => useCounter( 200 ) );
        const { counter, increment } = result.current;

        act(() => {
            increment(1);
            increment(2);
        });

        expect( result.current.counter ).toBe( 203 );

    });


    test('should decrement the counter', () => {

        const { result } = renderHook( () => useCounter( 200 ) );
        const { counter, decrement } = result.current;

        act(() => {
            decrement(1);
            decrement(2);
        });

        expect( result.current.counter ).toBe( 198 );

    });

    test('should reset the counter', () => {

        const { result } = renderHook( () => useCounter( 200 ) );
        const { counter, reset } = result.current;

        act(() => {
            reset();
        });

        expect( result.current.counter ).toBe( 200 );

    });

});