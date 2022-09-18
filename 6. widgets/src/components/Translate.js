import React, { useState } from "react";
import Dropdown from "./Dropdown.js";
import Convert from "./Convert.js";

const options = [
    { label: "Afrikaans", value: "af" },
    { label: "Arabic", value: "ar" },
    { label: "Hindi", value: "hi" },
    { label: "Hebrew", value: "he"}
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label">Enter text:</label>
                    <input
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                </div>
            </div>
            <Dropdown
                label="Select a language:"
                options={options}
                onSelectionChange={setLanguage}
                selected={language}
            />
        <hr/>
        <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;
