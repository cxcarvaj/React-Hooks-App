import { memo } from 'react';

export const Small = memo(( { value } ) => {

    console.log('Small component rendered again :(');

    return (
        <small>{ value }</small>
    );

});