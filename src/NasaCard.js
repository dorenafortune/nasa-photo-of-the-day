import React from "react";

const NasaCard = props => {
    return (
        <div className="photo-data" key={props.object}>
            <h2>{props.title}</h2>
            <img className = "img" src = {props.url} alt= "pic of the day" />
            <h3>Date: {props.date}</h3>
            <p>{props.explanation}</p>


        </div>
    )

}

export default NasaCard;