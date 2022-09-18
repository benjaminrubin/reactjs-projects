import React from 'react';
// import axios from 'axios';

// Component imports
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';


class App extends React.Component {

    state = {
        images: []
    }

    // Add asynch in front of the asynchronous method that is requesting
    // data from an API
    // We can then place the term "await" next to the api request call
    // and ultimately retrieve the response using the "response" variable

    // asyn onSearchSubmit(term){ // initially it was a regular function,
    // but this caused problems with binding the method to the App component
    // so when we called "this", it referred to this as the props object that
    // was passed to and from the child component
    onSearchSubmit = async (term) => {
        console.log("App's term is " + term);

        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        // console.log(response.data.results);
        this.setState({images: response.data.results});
    } 


    // Most obvious method of writing out an API request with Axios
    /* onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },    
            headers: {
                Authorization: 'Client-ID E2gpFxS4XjpXShw9-OVQOZzYYKch4GEqDnb_EViL5kc'
            }
        }).then(response => {
            console.log(response);
        })
    } */


    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}  />
            </div>
        )
    }
}; 

export default App;