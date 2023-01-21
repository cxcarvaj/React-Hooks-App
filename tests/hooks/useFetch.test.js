import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../../src/hooks/';

describe('Tests on the useFetch hook', () => {

    test('should return a quote', () => {
        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        
        const { data, isLoading, error } = result.current;

        expect(data).toBe(null);
        expect(isLoading).toBe(true);
        expect(error).toBe(null);
    });

});