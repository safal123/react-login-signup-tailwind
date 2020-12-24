import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Register from '../components/Register';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const PageRouter = () => {
    return (
        <Switch>
            <PrivateRoute
                restricted={true}
                path='/'
                exact
                component={Dashboard}
            />
            <PublicRoute
                restricted={false}
                path={'/login'}
                exact
                component={Login}
            />
            <PublicRoute
                restricted={false}
                path={'/register'}
                exact
                component={Register}
            />
        </Switch>
    );
};

export default PageRouter;
