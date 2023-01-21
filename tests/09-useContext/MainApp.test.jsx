import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';



describe('Tests on the <MainApp /> component', () => {

    test('should show the HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        const titlePage = screen.getByRole('heading', { level: 1 ,name: 'HomePage' });

        const [ , homeRef, ,  ] = screen.getAllByRole('link');

        expect( titlePage ).toBeTruthy();

        expect( homeRef.className ).toContain( 'active' );

    });


    test('should show the LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        const titlePage = screen.getByRole('heading', { level: 1 ,name: 'LoginPage' });

        const [ , , , loginRef ] = screen.getAllByRole('link');

        expect( titlePage ).toBeTruthy();
        
        expect( loginRef.className ).toContain( 'active' );


    });


    test('should show the AboutPage', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
            
        );

        const titlePage = screen.getByRole('heading', { level: 1 ,name: 'AboutPage' });
        
        const [ , , aboutRef, ] = screen.getAllByRole('link');

        expect( titlePage ).toBeTruthy();

        expect( aboutRef.className ).toContain( 'active' );


    });


});