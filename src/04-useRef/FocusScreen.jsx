import { useRef } from 'react'

export const FocusScreen = () => {
    
    const inputRef = useRef();
    
    const onFocus = () => {
        // document.querySelector('input').select()
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef }
                type="text"
                className="form-control"
                placeholder="Type your name"
            />

            <button 
                className="btn btn-primary mt-4"
                onClick={ onFocus }
            >
                Focus
            </button>
        </>
    )
}