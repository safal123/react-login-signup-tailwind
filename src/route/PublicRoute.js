import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
    const isAuth = localStorage.getItem('token') ? true : false;
    return (
        <Route
            {...rest}
            render={(props) => (!isAuth ? <Component /> : <Redirect to='/' />)}
        />
    );
};

export default PublicRoute;
