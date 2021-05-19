import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import useForm from "../Hooks/UseForm";
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../AuthContext';

const AddBookmark = () => {

    const { user } = useAuthContext();
    const [formData, setFormData] = useForm({ title: '', urlString: '', userId: user.Id });
    const history = useHistory();

    const onFormSubmit = async e => {
        e.preventDefault();
        await axios.post('/api/bookmarks/addbookmark', formData);
        history.push('/');
    }

    const onTextChange = e => {
        const copy = { ...formData };
        copy[e.target.name] = e.target.value;
        setFormData(copy);
    }

    return (
        <>
            <div className="row">
                <div className="col-md-6 offset-md-3 card card-body bg-light">
                    <h3>Add Bookmark</h3>
                    <form onSubmit={onFormSubmit}>
                        <input type="hidden" name="userId" value={user.Id}></input>
                        <input onChange={onTextChange} value={formData.title} type="text" name="title" placeholder="Title" className="form-control" />
                        <br />
                        <input onChange={onTextChange} value={formData.url} type="text" name="urlString" placeholder="Url" className="form-control" />
                        <br />
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </> 
    )
}

export default AddBookmark;