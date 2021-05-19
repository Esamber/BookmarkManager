import React from 'react';
import { useAuthContext } from '../AuthContext';
import MyBookmarksTable from '../components/MyBookmarksTable';

const UserBookmarks = () => {

    const { user } = useAuthContext();

    return (
        <>
            <h1 className="bg-light text-center display-1">Welcome back { user.Name}!</h1>
            <br />
            <button className="btn btn-primary btn-block">Add Bookmark</button>
            <br />
            <MyBookmarksTable user={user}/>
        </>
    )
}

export default UserBookmarks;