import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import useForm from "../Hooks/UseForm";
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../AuthContext';

const AddBookmark = () => {

    const { user } = useAuthContext();
    const [formData, setFormData] = useForm({ title: '', urlString: '', userId: user.id, id: '' });
    const history = useHistory();
    const [count, setCount] = useState();

    useEffect(() => {
        const getBookmarkCount = async () => {
            const count = await axios.get('/api/bookmarks/getCount');
            setCount(count);
        }
        getBookmarkCount();
    }, [])

    const onFormSubmit = async e => {
        e.preventDefault();
        await axios.post('/api/bookmarks/addbookmark', formData);
        history.push('/mybookmarks');
    }

    return (
        <>
            <div className="row">
                <div className="col-md-6 offset-md-3 card card-body bg-light">
                    <h3>Add Bookmark</h3>
                    <form onSubmit={onFormSubmit}>
                        <input type="hidden" name="userId" value={user.Id}></input>
                        <input type="hidden" name="id" value={count}></input>
                        <input onChange={setFormData} value={formData.title} type="text" name="title" placeholder="Title" className="form-control" />
                        <br />
                        <input onChange={setFormData} value={formData.urlString} type="text" name="urlString" placeholder="Url" className="form-control" />
                        <br />
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </> 
    )
}

export default AddBookmark;