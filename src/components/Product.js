import React from "react";


const Product = (props) => {
    const {trackName, trackPrice, borderColour} = props;
    return (
        <div style={{border: `0.5px solid ${borderColour}`}}>
            <p>{trackName}</p>
            <p>{trackPrice}</p>
        </div>
    );
};

export default Product;