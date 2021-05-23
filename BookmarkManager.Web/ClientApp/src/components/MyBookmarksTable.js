import React, { useEffect, useState } from 'react';
import MyBookmarksRow from './MyBookmarksRow'
import { useAuthContext } from '../AuthContext';
import axios from 'axios'

const MyBookmarksTable = () => {

    const [bookmarks, setBookmarks] = useState();


    const getUserBookmarks = async () => {
        const { data } = await axios.get(`/api/bookmarks/getUserBookmarks`);
        setBookmarks(data);
    }

    useEffect(() => {
        getUserBookmarks();
    }, [])

    return (
        <div>
            <table className="table table-hover table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Url</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {bookmarks && bookmarks.map(b => (<MyBookmarksRow bookmark={b} refresh={ getUserBookmarks}/>))}
                </tbody>
            </table>
        </div>
    )
}

export default MyBookmarksTable;