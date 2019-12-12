import React from "react";
import styled from 'styled-components'


const ColorH1 = styled.h1`
color: #198CFF;
font-family:'Abel', sans-serif;
font-size: 50px;
text-shadow: 3px 2px red;

`;


const Date = styled.h3`
color: #198CFF;
font-family: 'Dancing Script', cursive;
`

const ColorH2 = styled.h2`
color: #198CFF;
font-family: 'Dancing Script', cursive;

`;

const Paragraph = styled.p`
color: #0026E6;
font-size:25px;
margin:5px;
font-family:'Abel', sans-serif;
padding: 5%;
text-shadow: 3px 2px pink;

`


const Image = styled.img`
border-radius: 40%;
box-shadow: 15px 15px 5px lightgrey;

`


const NasaCard = props => {
    return (
        <div className="photo-data" key={props.object}>
            <ColorH1>NASA Photo of the Day</ColorH1>
            <ColorH2>{props.title}</ColorH2>
            <Image className="img" src={props.url} alt="pic of the day" />
            <Date>Date: {props.date}</Date>
            <Paragraph>{props.explanation}</Paragraph>

        </div>
    )

}

export default NasaCard;    