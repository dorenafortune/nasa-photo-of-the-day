import React from "react";

const NasaCard = props => {
    return (
        <div className="photo-data" key={props.object}>
            <h2>Title: {props.title}</h2>
            <h3>Date: {props.date}</h3>
            <p>{props.explanation}</p>


        </div>
    )

}

export default NasaCard;