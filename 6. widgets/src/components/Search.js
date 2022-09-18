import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

const Search = () => {
    const [term, setTerm] = useState("programming");
    const [results, setResults] = useState([]);
    

    /* Similar to onComponentDidUpdate() */
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        format: "json",
                        origin: "*",
                        srsearch: term,
                    },
                }
            );

            setResults(data.query.search);
        };

        // To avoid a time delay on the first render, particularly
        // if we have a search term hard coded already, we would
        // check if the term isn't an empty string && the results array is empty
        // which indicates that this is on an initial render
        if (term && !results.length) {
            search();
        } else {
            /* Since there is an error submitting a request for data
            with an empty string, we can call search() only if term
            is NOT an empty string */
            const timeoutId = setTimeout(() => {
                // If the input changes, clearTimeout(timer);

                if (term) {
                    search();
                }
            }, 500);

            /*
                The return function below is returned and remembered by the useEffect() function. called a CLEANUP FUNCTION
                The function returned from useEffect is called immediately the next time the functional
                component re-renders, before executing the code inside useEffect().
                In our case, we want to stop the timeOut function if the component
                updates before the end of the 500ms. That way, we wait for 
                user input to totally complete before calling the api.
            */

            // CLEANUP FUNCTION
            return () => {
                // clearTimeout stops the execution of the function passed in the
                // setTimeout
                clearTimeout(timeoutId);
            };
        }


    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        target="_blank"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search Wikipedia:</label>
                    <input
                        className="input"
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;
