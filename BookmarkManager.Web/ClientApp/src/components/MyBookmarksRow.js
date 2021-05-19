import axios from 'axios';
import React, { useState, useHistory } from 'react';

const MyBookmarksRow = ({ bookmark }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(bookmark.title);
    const history = useHistory();

    const onUpdateClick = async title => {
        let editedBookmark = { ...bookmark, Title: editedTitle }
        await axios.post('/api/bookmarks/updatetitle', { editedBookmark });
        setIsEditing(false);
        //bookmark.title = title;
        history.push('/mybookmarks');
    }

    const onDeleteClick = async () => {
        await axios.post('/api/bookmarks/deletebookmark', { id: bookmark.id });
        history.push('/mybookmark');
    }

    return (
        <tr>
            <td>{isEditing ?
                <input type="text"
                    value={bookmark.title}
                    onChange={e => setEditedTitle(e.target.value)}
                    name="title"
                    className="form-control">
                </input> :
                bookmark.Title}
            </td>
            <td>
                <a href={bookmark.url} target="_blank">{bookmark.url}</a>
            </td>
            <td>
                (!isEditing ?
                <button className="btn btn-success" onClick={() => setIsEditing(true)}>Edit Title</button> :
                <button className="btn btn-warning" onClick={onUpdateClick}>Update</button>
                <button className="btn btn-info" onClick={() => setIsEditing(false)}>Cancel</button>
                )
                <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
            </td>
        </tr>
    )
}

export default MyBookmarksRow;