import React, { useState } from 'react';

// currently, the animation abrudptedly returns to the static image
// if it is in the middle of its animation. Fix this in the future.
function ImageButton(props) {
    const [currentSrc, setCurrentSrc] = useState(props.src);

    return (
        <button
            className="image-button"
            onMouseEnter={() => setCurrentSrc(props.hoverSrc)}
            onMouseLeave={() => setCurrentSrc(props.src)}
        >
            <img src={currentSrc} alt={props.alt} />
        </button>
    );
}

export default ImageButton;