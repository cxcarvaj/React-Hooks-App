import { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ author, quote }) => {

    const paragraphRef = useRef();

    const [ boxSize, setBoxSize ] = useState({
        width: 0,
        height: 0
    });

    // * This is the same as useEffect but it runs before the render.
    useLayoutEffect(() => {

        const { height, width } = paragraphRef.current.getBoundingClientRect();
        setBoxSize({ height, width });

    }, [quote]);

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={ { display: 'flex' } }
            >
                <p ref={ paragraphRef } className="mb-1"> { quote } </p>
                <footer className="blockquote-footer mt-2"> { author } </footer>
            </blockquote>

            <code> { JSON.stringify(boxSize) } </code>
        </>
    );

};