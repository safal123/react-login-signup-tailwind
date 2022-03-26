import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../../store/reducers/auth';
import { auth as authActions } from '../../../store/reducers';
import { useDispatch } from 'react-redux';

import useWindowSize from '../../../_helpers/calculateWindowWidth';
import { useHistory } from 'react-router-dom';
import MobileNav from './MobileNav';
import BurgerIcon from './BurgerIcon';
import AuthLinks from './AuthLinks';

const Nav = () => {
    const [width] = useWindowSize();
    const [isMobile, setIsMobile] = useState(false);
    const auth = useSelector((state) => state.auth)
    const authAction = authActions.actions
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() =>
    {
        const syncUser = async () => {
            if (localStorage.getItem('token')){
                dispatch(await getUser())
                dispatch(await authAction.refresh())
            }
        }
        syncUser()
    }, []);

    const logout = () =>{
        dispatch(authAction.logout())
        history.push('/login')
    }

    return (
        <div className='main'>
            <nav className='bg-gray-800'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='flex items-center justify-between h-16'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <Link to='/'>
                                    <img
                                        className='h-8 w-8'
                                        src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                                        alt=''
                                    />
                                </Link>
                            </div>

                            <div className='hidden md:block'>
                                <div className='flex ml-10 items-baseline space-x-4'>
                                    <Link to='/' className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Dashboard</Link>
                                </div>
                            </div>
                        </div>
                        <AuthLinks auth={auth} logout={logout}/>
                        <BurgerIcon isMobile={isMobile} setIsMobile={setIsMobile}/>
                    </div>
                </div>
                <div className={isMobile && width < 768 ? 'block' : 'hidden'}>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link to='/' className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Dashboard</Link>
                    </div>
                    {auth && auth.isLoggedIn ?
                        <MobileNav auth={auth} logout={logout}/>: ''
                    }
                </div>
            </nav>
        </div>
    );
};

export default Nav;
