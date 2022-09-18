import React from "react";
import "./VideoItem.css";

const VideoItem = ({video, onVideoSelect}) => {

        return (
            <div className="video-item item" onClick={(e) => {
                    // When clicking, this method is launched,
                    // i.e. a callback. And within the callback
                    // is where we call the passed-down function
                    // onVideoSelect and pass the (video) parameter
                    // This callback function will only execute upon
                    // the event of the user actually clicking on the
                    // component
                    onVideoSelect(video)
                }}>
                <img
                    className={"ui image"}
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.description}
                />

                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                </div>
            </div>

        );

}

export default VideoItem;
