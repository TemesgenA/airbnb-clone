import React from "react";
import star from '../images/star1.png';

 function Card(props) {
     let badgeText;
     if (props.badge === 0) {
        badgeText = 'SOLD OUT';
     } else if (props.location === "Online") {
        badgeText = "ONLINE"
     }
    return (
        <div className="Card">
            <span className="Card-badge">{badgeText}</span>
            <img src={props.coverImg} alt="card" className="Card-image" />
            <div className="Card-details">
                <img src={star} alt="star" className="star-image" />
                <span> {props.stats.rating}</span>
                <span> ({props.stats.reviewCount})</span>
                <span> {props.location}</span>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong>  / person</p>
            </div>
        </div>
    );
}

export default Card;
