import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import Nav from './components/Inputs/Nav/Nav';
import PageRouter from './route/PageRouter';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Nav />
                <PageRouter />
            </Router>
        </Provider>
    );
};

export default App;
