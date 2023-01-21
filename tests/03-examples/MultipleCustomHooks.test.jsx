import { render, screen, fireEvent } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch, useCounter } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Tests in <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should show the component by default', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            error: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText('Breaking Bad Quotes')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });

        expect( nextButton.disabled ).toBeTruthy();

    });

    test('should show a quote', async () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hello World!' }],
            isLoading: false,
            error: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Hello World!')).toBeTruthy();
        expect(screen.getByText('Fernando')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });

        expect( nextButton.disabled ).toBeFalsy();

    });

    test('should call the increment function', async () => {
        
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hello World!' }],
            isLoading: false,
            error: null
        });


        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();



    });

});