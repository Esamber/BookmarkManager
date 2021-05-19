import React, { useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../AuthContext';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const { logout } = useAuthContext();
    const history = useHistory();

    useEffect(() => {
        const doLogout = async () => {
            await axios.get('/api/account/logout');
            logout();
            history.push('/');
        }
        doLogout();
    }, []);

    return (<></>);
}
export default Logout;