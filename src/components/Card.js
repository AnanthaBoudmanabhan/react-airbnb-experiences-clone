import React from 'react';

function Card(props) {

    let badgeText;
    if (props.openSpots === 0)
        badgeText = "SOLD OUT";
    else if (props.location === "Online")
        badgeText = "ONLINE";

    return (
        <div className="card">
            <img
                className="card--photo"
                src={`/images/${props.coverImg}`}
                alt={props.title}
            />
            {badgeText && <span className="card--badge">{badgeText}</span>}
            <div className="card--stats">
                <img
                    src="/images/star.png"
                    alt="star rating"
                    className="card--star"
                />
                <span className="card--rating">{props.rating}</span>
                <span className="gray">({props.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;