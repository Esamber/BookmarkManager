import React, { useEffect, useState } from 'react';
import MyBookmarksRow from './MyBookmarksRow'
import { useAuthContext } from '../AuthContext';
import axios from 'axios'

const MyBookmarksTable = () => {

    const { user } = useAuthContext();
    const id = user.id;
    const [bookmarks, setBookmarks] = useState();

    useEffect(() => {
        const getUserBookmarks = async () => {
            const { data } = await axios.get('/api/bookmarks/getUserBookmarks', { id });
            setBookmarks(data);
        }
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
                    {bookmarks && bookmarks.map(b => (<MyBookmarksRow bookmark={ b}/>))}
                </tbody>
            </table>
        </div>
    )
}

export default MyBookmarksTable;