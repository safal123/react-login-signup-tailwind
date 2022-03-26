import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) =>{
    const { isLoggedIn } = useSelector((state) => state.auth)
    return (
        <Route
            {...rest}
            render={(props) => isLoggedIn ? <Component /> : <Redirect to='/login' /> }
        />
    );
};

export default PrivateRoute;
