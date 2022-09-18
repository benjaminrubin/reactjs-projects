import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = (props) => {
    /* A key must always be associated with elements of a list
     that is being rendered in the DOM. The key value only needs
     to be on the root element of the list. Meaning, if the img tag
     was inside a div block, then only add the key to the div block */
    // const images = props.images.map((image) => {
    //     return <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
    // });
    // const images = props.images.map(({alt_description: alt, id, urls}) => {
    //     return <ImageCard alt={alt} key={id} src={urls.regular}  />
    // });
    const images = props.images.map(image => {
        return <ImageCard 
            key={image.id}
            image={image}
        />
    });
    
    return (
        <div className={"image-list"}>
            {images}             
        </div>
    )


}

export default ImageList;