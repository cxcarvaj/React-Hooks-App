import { useMemo, useState } from 'react';
import { useCounter } from '../hooks'

const heavyStuff = ( iterationsNumber = 100 ) => {
    for (let i = 0; i < iterationsNumber; i++) {
        console.log('Here we go...');
    }
    return `${ iterationsNumber } iterations done.`;
};

export const MemoHook = () => {

    const { counter, increment } = useCounter( 40 );
    const [ show, setShow ] = useState(true);


    // * useMemo() is used to memorize a value, so that it is not recalculated
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />

            <h4>{ memorizedValue }</h4>


            <button
                className="btn btn-primary"
                onClick={ () => increment(1) }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ms-3"
                onClick={ () => setShow(!show) }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </>
    )
};