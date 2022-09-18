import React from 'react';


const Spinner = (props) => {

    return (
        <div className="ui active inverted dimmer">
            <div className="ui text loader">{props.message}</div>
            {/* <div className="ui text loader">{props.message || "Loading..."}</div> */}
        </div>
    )
}

// Defining default props
// Always good to have default props for highly reusable components
Spinner.defaultProps = {
    message: "Loading..."
};

export default Spinner;