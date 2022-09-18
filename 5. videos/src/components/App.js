import React from "react";
// import axios from 'axios';
import youtube from "../api/youtube";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

// YouTube API Key
const KEY = "AIzaSyCKhx7hLfA22KnSU2gZEZg9qta-CW9CEA0";

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    componentDidMount() {
        this.searchTerm("buildings");
    }

    searchTerm = async (term) => {
        console.log("Searching for " + term);

        const response = await youtube.get("/search", {
            params: {
                key: KEY,
                part: "snippet",
                maxResults: 5,
                type: "video",
                q: term,
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });

        /*
            Can also be:
            axios.get("/search", {
                baseURL: "https://www.googleapis.com/youtube/v3",
                params: {
                    key: KEY,
                    part: "snippet",
                    maxResults: 5,
                    type: "video"
                }
            }).then(response => console.log(response));
        */
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar searchTerm={this.searchTerm} />
                <div className={"ui grid"}>
                    <div className="ui row">
                        <div className={"eleven wide column"}>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className={"five wide column"}>
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
