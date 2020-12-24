import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);

    useEffect(() => {}, []);

    async function register(data) {
        const response = await axios.post(
            'https://laravel-react-redux.herokuapp.com/api/register',
            data
        );
        setAuth(true);
        console.log(auth);
        return response;
    }

    const value = {
        auth,
        register,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
