import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuth = localStorage.getItem('token') ? true : false;
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuth ? <Component /> : <Redirect to='/login' />
            }
        />
    );
};

export default PrivateRoute;
