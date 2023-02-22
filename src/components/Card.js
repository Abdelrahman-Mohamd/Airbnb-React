import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card--image" alt="katie-zaferes"/>
            <div className="card--stats">
                <img src="https://www.pngkey.com/png/full/57-576538_pink-star-clip-art-at-clker-pink-star.png" alt="star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}