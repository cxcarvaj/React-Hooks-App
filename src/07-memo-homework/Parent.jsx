import { useCallback, useState } from 'react';
import { Child } from './Child'

export const Parent = () => {

    const numbers = [2,4,6,8,10];
    const [value, setValue] = useState(0);

    const increment = useCallback(( num ) => {
        setValue( (value) => value + num );
    }, []);

    return (
        <div>
            <h1>Parent Component</h1>
            <p> Total: { value } </p>

            <hr />

            {
                numbers.map( n => (
                    <Child 
                        key={ n }
                        number={ n }
                        increment={ increment }
                    />
                ))
            }
        </div>
    )
}
