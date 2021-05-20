import React, { useState, createContext, useContext } from 'react';
import { useAuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';

const Layout = (props) => {

    const { user } = useAuthContext();

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand" href="'/'">Bookmark Manager</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to='/' className='nav-link text-light'>
                                        Home
                                    </Link>
                                </li>
                                {!user && <>
                                    <li className="nav-item">
                                        <Link to='/account/signup' className='nav-link text-light'>
                                            Signup
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/account/login' className='nav-link text-light'>
                                            Login
                                    </Link>
                                    </li> </>}
                                {!!user && <>
                                    <li className="nav-item">
                                        <Link to='/mybookmarks' className='nav-link text-light'>
                                            My Bookmarks
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/addbookmark' className='nav-link text-light'>
                                            Add Bookmark
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/account/logout' className='nav-link text-light'>
                                            Logout
                                    </Link>
                                    </li> </>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container" style={{ marginTop: 80 }}>
                <main role="main" className="pb-3">
                    {props.children}
                </main>
            </div>
        </div>
    )
}

export default Layout;