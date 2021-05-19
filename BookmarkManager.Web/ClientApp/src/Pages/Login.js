import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuthContext } from '../AuthContext';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isValidLogin, setIsValidLogin] = useState(true);
    const { setUser } = useAuthContext();
    const history = useHistory();

    const onTextChange = e => {
        const copy = { ...formData };
        copy[e.target.name] = e.target.value;
        setFormData(copy);
    }
    const onFormSubmit = async e => {
        e.preventDefault();
        const { data } = await axios.post('/api/account/login', formData);
        const isValidLogin = !!data;
        setUser(data);
        setIsValidLogin(isValidLogin);
        history.push('/mybookmarks');
    }
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 card card-body bg-light">
                <h3>Log in to your account</h3>
                {!isValidLogin && <span className='text-danger'>Invalid username/password. Please try again.</span>}
                <form onSubmit={onFormSubmit}>  
                    <input onChange={onTextChange} value={formData.email} type="text" name="email" placeholder="Email" className="form-control" />
                    <br />
                    <input onChange={onTextChange} value={formData.password} type="password" name="password" placeholder="Password" className="form-control" />
                    <br />
                    <button className="btn btn-primary">Login</button>
                </form>
                <Link to="/signup">Sign up for a new account</Link>
            </div>
        </div>
    )
}
export default Login;