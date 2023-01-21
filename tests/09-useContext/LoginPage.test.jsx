import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";


describe('Tests on the <LoginPage /> component', () => {

    beforeAll(() => {
        jest.clearAllMocks();
    });

    test('should show the component without the user', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect( preTag.innerHTML ).toBe('null');


    });

    test('should show the component with the user', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const loginButton = screen.getByRole('button', { name: 'Login' });
        
        fireEvent.click( loginButton );
        
        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledTimes(1);
        expect( setUserMock ).toHaveBeenCalledWith(
            {
                id: 123,
                name: 'Carlos Carvajal',
                email: 'carlos.carvajal@gmail.com',
            }
        );
        // expect( preTag.innerHTML ).toBe('null');


    });

});