import React from 'react';

function ImageButton(props) {
    return (
        <button className="image-button">
            <img src={props.src} alt={props.alt} />
        </button>
    );
}

export default ImageButton;
