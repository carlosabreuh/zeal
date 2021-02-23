import React, { useEffect, useState } from 'react';
import Articles from './components/Articles';
import axios from 'axios';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(` https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
        }
    })
}
