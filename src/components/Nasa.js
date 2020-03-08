import React, { useState, useEffect } from 'react';
import axios from "axios";
import NasaCard from "./NasaCard.js";

function Nasa() {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=7pkGQ2TpQLg4kYbGovdSN3B5bFEgRkqcjo8hLOUE")
            .then(response => {
                setArticle(response.data);
            })
    }, []);
    useEffect(() => {
    }, [article])

    return <NasaCard

        data={article.data}
        title={article.title}
        url={article.url}
        explaination={article.explaination}

    />
}

export default Nasa;