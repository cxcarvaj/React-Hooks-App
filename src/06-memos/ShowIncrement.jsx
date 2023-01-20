import { memo } from "react";

export const ShowIncrement = memo( ({ increment }) => {

    console.log('ShowIncrement was rendered');

    return (
        <button 
            className="btn btn-primary"
            onClick={ () => {
                increment( 5 );
            }}
        >
            Increment
        </button>
    )
}
);