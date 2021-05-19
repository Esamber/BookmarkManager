import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddBookmark from './Pages/AddBookmark';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UserBookmarks from './Pages/UserBookmarks';
import PrivateRoute from './PrivateRoute';
import Logout from './Pages/Logout';
import { AuthContextComponent } from './AuthContext';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <AuthContextComponent>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/account/signup' component={Signup} />
                <Route exact path='/account/login' component={Login} />
                <Route exact path='/account/logout' component={Logout} />
                <PrivateRoute exact path='/mybookmarks' component={UserBookmarks} />
                <PrivateRoute exact path='/addbookmark' component={AddBookmark} />
            </Layout>
        </AuthContextComponent>
    );
  }
}