import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from '../store/reducers/auth'

const Dashboard = () => {
    const auth = useSelector((state) => state.auth) 

    const dispatch = useDispatch();
    const refreshAuth = () => {
        dispatch(getUser())
    }
    return (
        <div className='shadow-md max-w-7xl mx-auto p-4 mt-6 border space-y-2'>
            <h2 className='p-2 border mt-2'>{auth.isLoggedIn ? 'Logout' : 'Login'}</h2>
            <pre>{ JSON.stringify(auth.user, null, 2) }</pre>
            <div>
                <button onClick={refreshAuth} className='border p-2 bg-green-100 border-green-200 text-green-700'>Refresh Auth User</button>
            </div>
        </div>
    );
}

export default Dashboard
