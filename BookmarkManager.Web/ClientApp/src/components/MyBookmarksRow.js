import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MyBookmarksRow = ({ bookmark, refresh }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(bookmark.title);
    const history = useHistory();

    const onUpdateClick = async () => {
        let editedBookmark = { ...bookmark, Title: editedTitle }
        await axios.post('/api/bookmarks/updatetitle', editedBookmark );
        setIsEditing(false);
        refresh();
    }

    const onDeleteClick = async () => {
        await axios.post(`/api/bookmarks/deletebookmark?id=${bookmark.id}`);
        refresh();
    }

    const onCancelClick = async () => {
        setIsEditing(false);
        setEditedTitle(bookmark.title);
    }

    return (
        <tr>
            <td>{isEditing ?
                <input type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    name="title"
                    className="form-control">
                </input> :
                bookmark.title}
            </td>
            <td>
                <a href={bookmark.url} target="_blank">{bookmark.url}</a>
            </td>
            <td>
                {!isEditing ? 
                    <button className="btn btn-outline-success" onClick={() => setIsEditing(true)}>Edit Title</button> 
                    :
                    <>
                    <button className="btn btn-outline-warning" onClick={onUpdateClick}>Update</button>
                    <button className="btn btn-outline-info" style={{ marginLeft: 10 }} onClick={onCancelClick}>Cancel</button>
                    </>}
                <button className="btn btn-outline-danger" style={{ marginLeft: 10 }} onClick={onDeleteClick}>Delete</button>
            </td>
        </tr>
    )
}

export default MyBookmarksRow;