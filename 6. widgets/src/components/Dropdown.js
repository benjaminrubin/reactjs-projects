import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, onSelectionChange, selected }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const optionsList = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <option
                key={option.value}
                className="item"
                onClick={() => onSelectionChange(option)}
            >
                {option.label}
            </option>
        );
    });

    useEffect(() => {
        const onBodyClick = (event) => {
            // If the jsx that was clicked on is within the
            // 'ui form' component, don't do anything since
            // it will close automatically from the dropdown's
            // onclick event
            if (ref.current.contains(event.target)) {
                // The contains() method returns a Boolean
                // value indicating whether a node is a descendant
                // of a specified node. A descendant can be a child,
                // grandchild, great-grandchild, and so on.

                return;
            }

            // If the jsx that was clicked on was outside the
            // ui form component, then close
            setOpen(false);
        };

        document.body.addEventListener("click", onBodyClick);

        // Cleanup function to check whether Dropdown is null (hidden)
        // or not. This function not only runs before the useEffect()
        // method runs from the second time onward on each render,
        // but also when you're about to stop showing the jsx component
        return () => {
            document.body.removeEventListener('click', onBodyClick);

        };
    }, []);

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${
                        open ? "visible active" : ""
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {optionsList}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
