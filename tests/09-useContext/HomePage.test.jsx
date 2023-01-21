import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';


describe('Tests on the <HomePage /> component', () => {

    const user = {
        id: 1,
        name: 'John',
        email: 'this.is.a.awesome.email.com',
    }

    test('should show the component without the user', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect( preTag.innerHTML ).toBe('null');
    });

    test('should show the component with a user', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect( preTag.innerHTML ).toBe(JSON.stringify(user, null, 3));
        expect( preTag.innerHTML ).toContain(user.name);
        expect( preTag.innerHTML ).toContain(`${user.id}`);
    });

});