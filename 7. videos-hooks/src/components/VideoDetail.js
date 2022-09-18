import React from "react";

const VideoDetail = ({ video }) => {
    console.log(video);

    // This is the same as (video !== null)
    if (!video) {
        return <div>Loading...</div>;
    }


    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className={"ui embed"}>
                <iframe
                    src={videoSrc}
                    title="video player"
                />
            </div>
            <div className={"ui segment"}>
                <h4 className="ui header">{video.snippet.title}</h4>
                <p className={"content"}>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
