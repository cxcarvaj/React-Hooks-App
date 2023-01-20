import { memo } from "react";

export const Child = memo(({ number, increment }) => {

    console.log('Child was rendered');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => increment( number ) }
        >
            { number }
        </button>
    )
});
