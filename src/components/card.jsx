import React from "react";
import star from '../images/star1.png';

function Card(props) {
    return (
        <div className="Card">
            <img src={props.img} alt="card" className="Card-image" />
            <div className="Card-details">
                <img src={star} alt="star" className="star-image" />
                <span> {props.rating}</span><span> {props.reviewCount}</span><span> {props.country}</span>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong>  / person</p>
            </div>
        </div>
    );
}

export default Card;
