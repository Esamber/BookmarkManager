import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../AuthContext';
import MyBookmarksTable from '../components/MyBookmarksTable';

const UserBookmarks = () => {

    const { user } = useAuthContext();
    const history = useHistory();

    return (
        <>
            <h1 className="bg-light text-center display-3">Welcome back {user.firstName} {user.lastName}!</h1>
            <br />
            <button className="btn btn-primary btn-block" onClick={ () => history.push('/addbookmark')}>Add Bookmark</button>
            <br />
            <MyBookmarksTable user={ user}/>
        </>
    )
}

export default UserBookmarks;