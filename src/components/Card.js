import React from "react"

export default function Card(props) {
    console.log(props);
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = 'SOLD OUT';
    }else if(props.item.location === 'Online'){
        badgeText = 'ONLINE';
    }
    return (
        <div className="card">
            {/* the new way of conditional props, if badgeText exists, render the right hand side */}
            {badgeText&&<div className="card--badge">{badgeText}</div>}
            {/* the normal way of conditional props */}
             {/* {props.openSpots===0 &&<div className="card--badge">SOLD OUT</div>} */}
            <img src={props.item.coverImg} className="card--image" alt="pic"/>
            <div className="card--stats">
                <img src="https://www.pngkey.com/png/full/57-576538_pink-star-clip-art-at-clker-pink-star.png" alt="star" className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}