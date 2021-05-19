import React, { useState, useEffect } from 'react';
import TopUrlTable from '../components/TopUrlTable';

import axios from 'axios';const HomePage = () => {

    const [urls, setUrls] = useState();

    useEffect(() => {
        const getTopFive = async () => {
            const { data } = await axios.get('/api/bookmarks/getTopFive');
            setUrls(data);
        }

        getTopFive();
    }, []);

    return (
        <>
            <h1>Welcome to the Bookmark Manager</h1>
            <h3>Top 5 most bookmarked links:</h3>
            <TopUrlTable urls={urls}/>
        </>
    )
}

export default HomePage;