import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


// This is a functional component
// const App = () => {
//     return (
//         <div>
//             <div>Hello world!</div>
//             < SeasonDisplay />
//         </div>
//     )
// }

// This is a CLASS based component
class App extends React.Component {

    // Not required by React
    // Instantly called before anything else
    // Great place to initialize state
    constructor(props) {
        // Super calls the constructor of the parent React.Component class
        // Has to happen every time
        super(props);

        // Where we are setting state
        // Whenever we have a property that will be set to a number,
        // we usually set it as null
        this.state = {
            lat: null,
            errorMessage: ''
        }
    }

    // Equivalently, you can just set up the state like so instead of calling 
    // the constructor
    // **Updating state will cause all child components to re-render as well
    state = {
        lat: null,
        errorMessage: ''
    }


    // Helper function for figuring out the content
    renderContent() {
        if (!this.state.errorMessage && !this.state.lat) {
            // return < Spinner message="Finding your location..." />;
            return < Spinner />;
        }
        else if (this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat} />
            )
        }
        else {
            return (
                <div>Error: {this.state.errorMessage}</div>
            )
        }
    }



    // React requires this method to be defined for every class based component 
    // React gets called quite frequently, so we never initialize work or requests in
    // the render method. This will slow shit down drastically
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )

    }


    componentDidMount() {
        console.log("Component just rendered for the first time");
        // Get geolocation of user
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => { this.setState({ errorMessage: err.message }) }
        );
    }

    // Gets called right after the render() method, every time a component is updated
    componentDidUpdate() {
        console.log("Component just updated")
    }

}

ReactDOM.render(
    < App />,
    document.getElementById("root")
);