import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(
        localStorage.getItem('token') ? true : false
    );

    async function register(data) {
        const response = await axios.post(
            'https://laravel-react-redux.herokuapp.com/api/register',
            data
        );
        return response;
    }

    const value = {
        register,
        auth,
        setAuth,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
