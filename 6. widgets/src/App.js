import React, { useState } from "react";
import Accordion from "./components/Accordion.js";
import Search from "./components/Search.js";
import Dropdown from "./components/Dropdown.js";
import Translate from "./components/Translate.js";
import Route from "./components/Route.js";
import Header from "./components/Header.js";

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework",
    },
    {
        title: "How is your day?",
        content: "Pretty good. It's pretty good.",
    },
    {
        title: "What are we eating?",
        content: "Only the best food for you.",
    },
];

const options = [
    { label: "The Color Red", value: "red" },
    { label: "The Color Green", value: "green" },
    { label: "A Shade of Blue", value: "blue" },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color:"
                    options={options}
                    onSelectionChange={setSelected}
                    selected={selected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};
