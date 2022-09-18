import './SeasonDisplay.css';
import React from 'react';

// A note on importing CSS
// Importing css files is done at the component level, within the Javascript
// file. This is done because it then gets minified and bundled

const seasonConfig = {
    summer: {
        text: "Let's go to the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr it's cold here!",
        iconName: "snowflake"
    }
}


// A const function is immutable, no one can change it (an error will be thrown)
// However, regular functions can be defined anywhere in the document and they will
// be hoisted to the top of the scope and can be called from anywhere
// const functions have to be declared before they are called 

// any value declared using the const keyword is inaccessible until execution reaches it.
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
};


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];


    //Notice that the root div has the same css class name as the javascript component

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay;