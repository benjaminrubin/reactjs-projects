import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        }

        this.imageRef = React.createRef();
    }

    componentDidMount() {

        // We need to add an event listener to wait for the DOM
        // element to load. Only once it's loaded can we get the 
        // height of the image, otherwise it will show 0

        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    /* We use an arrow function so we can bind this function to the ImageCard
        element. This allows us to call this function in the componentDidMount
        method without errors. If we didn't have the arrow function, or a 
        bind in the component's constructor, the "this" in this.setSpans would
        be undefined, thus throwing an error*/
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        // Calculating the number of spans, or how many rows
        // we should save for the element.
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    };

    render() {
        const { alt_descrption: alt, urls } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={alt} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;
