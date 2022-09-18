import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
    const [translation, setTranslation] = useState("");
    const [debouncedText, setDebouncedText] = useState(text);


    // First useEffect method is to update debouncedText using timeout method
    // to avoid pinging the api server to many times (costly)
    // After X ms, we set the debouncedText to the value of text
    useEffect(() => {
        // Calling the function with timeout
        const timeoutId = setTimeout(() => {
            if (text) {
                setDebouncedText(text);
            }
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [text]);



    // Second useEffect method fires when the debouncedText changes
    // due to the first useEffect method. If the debouncedText method 
    // changes, then we send a request to the api server
    useEffect(() => {
        // Defining the function
        const translateText = async () => {
            const { data } = await axios.post(
                "https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: {
                        q: debouncedText,
                        source: "en",
                        target: language.value,
                        key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
                    },
                }
            );

            setTranslation(data.data.translations[0].translatedText);
        };
        translateText();
    }, [debouncedText, language]);

    return (
        <div>
            <h1 className="ui header">{translation}</h1>
        </div>
    );
};

export default Convert;
