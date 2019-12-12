import React from "react";
import styled from 'styled-components'


const Date = styled.h3`
color: #198CFF;
`

const ColorH2 = styled.h2`
color: #198CFF;

`;

const Paragraph = styled.p`
color: #0026E6;
font-size:30px;
`

const ColorH1 = styled.h1`
color: #198CFF;

`;

const Image = styled.img`
border-radius: 50%;
`


const NasaCard = props => {
    return (
        <div className="photo-data" key={props.object}>
            <ColorH1>NASA Photo of the Day</ColorH1>
            <ColorH2>{props.title}</ColorH2>
            <Image className = "img" src = {props.url} alt= "pic of the day" />
            <Date>Date: {props.date}</Date>
            <Paragraph>{props.explanation}</Paragraph>
            


        </div>
    )

}

export default NasaCard;