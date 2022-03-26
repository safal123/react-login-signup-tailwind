import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Register from '../components/Register';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const PageRouter = () => {
    const { isLoggedIn } = useSelector((state) => state.auth)
    return (
        <Switch>
            <PublicRoute
                restricted={false}
                path={'/login'}
                exact
                component={Login}
                isLoggedIn={isLoggedIn}
            />
            <PublicRoute
                restricted={false}
                path={'/register'}
                exact
                component={Register}
                isLoggedIn={isLoggedIn}
            />
            <PrivateRoute
                restricted={true}
                path='/'
                exact
                component={Dashboard}
                isLoggedIn={isLoggedIn}
            />
        </Switch>
    );
};

export default PageRouter;
