import axios from 'axios';

export const register = async (data) => {
    const response = await axios.post(
        'https://laravel-react-redux.herokuapp.com/api/register',
        data
    );
    return response;
};

export const getUser = async () => {
    let token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8000/api/user', {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    });

    return response;
};
