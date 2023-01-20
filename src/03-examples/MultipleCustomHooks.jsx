import { useFetch, useCounter } from "../hooks/";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter( 1 ); 

    const { data, isLoading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // * This should be change due to the api is not working.
    const { author, quote } = Boolean(data) && { 
        author: 'Default Author', quote: 'This is inspiring quote'
        };


    return(
        <>
            <h1> Breaking Bad Quotes </h1>
            <hr/>

            { isLoading 
                    ? <LoadingQuote />
                    : <Quote author = { author } quote = { quote } />
            }

            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }
                >
                    Next Quote
            </button>

        </>
    )
}