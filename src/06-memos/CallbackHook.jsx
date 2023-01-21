import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState( 10 );

    //  * Same as useMemo but to memorize functions
    const incrementFather = useCallback(( incrementValue ) => {
        setCounter( (value) => value + incrementValue );
    }, []);

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementFather }/>

        </>
    )
};