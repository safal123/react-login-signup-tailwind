/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './components/Nav';
import { AuthProvider } from './contexts/AuthContext';
import PageRouter from './route/PageRouter';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Nav />
                <PageRouter />
            </AuthProvider>
        </Router>
    );
};

export default App;
