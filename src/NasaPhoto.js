import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
export default function NasaPhoto() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=a0d7kqjtXDd7W9Ix4DhLajV1I6g3dggAQ8ZPTbhe`)
        .then(response => {
            console.log(response.data);
            setPhotos(response.data);
        })
        .catch(error => {
            console.log("data not returned", error);
        })
    }, []);

    return (
   <div className= "photo">
       <NasaCard
       url = {photos.url}
       title = {photos.title}
       date = {photos.date}
       explanation = {photos.explanation}


       />

    </div> );

}