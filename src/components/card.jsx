import React from "react";
import star from '../images/star1.png';

 function Card(props) {
     console.log(props.coverImg);
    return (
        <div className="Card">
            <img src={props.coverImg} alt="card" className="Card-image" />
            <div className="Card-details">
                <img src={star} alt="star" className="star-image" />
                <span> {props.rating}</span>
                <span> {props.reviewCount}</span>
                <span> {props.location}</span>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong>  / person</p>
            </div>
        </div>
    );
}

export default Card;
