/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useWindowSize from '../_helpers/calculateWindowWidth';
import { useAuth } from '../contexts/AuthContext';

const Nav = () => {
    const [width] = useWindowSize();
    const [isMobile, setIsMobile] = useState(false);
    const history = useHistory();
    // const { auth } = useAuth();
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };
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
                                    <a
                                        href='#'
                                        className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                                    >
                                        Dashboard
                                    </a>
                                    <a
                                        href='#'
                                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    >
                                        Team
                                    </a>

                                    <a
                                        href='#'
                                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    >
                                        Projects
                                    </a>
                                    <a
                                        onClick={() => logout()}
                                        to='/login'
                                        className='text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    >
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* end of left */}
                        {auth && auth ? (
                            <div className='hidden md:block text-white'>
                                <div className='flex items-center'>
                                    <a
                                        onClick={() => logout()}
                                        to='/login'
                                        className='text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    >
                                        Logout
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className='hidden md:block text-white'>
                                <div className='flex items-center'>
                                    <Link
                                        to='/login'
                                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to='/register'
                                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                        )}
                        <div className='md:hidden text-white cursor-pointer'>
                            <span className='sr-only'>Open main menu</span>
                            <button onClick={() => setIsMobile(!isMobile)}>
                                {isMobile ? (
                                    <svg
                                        className='h-6 w-6'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        aria-hidden='true'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className='block h-6 w-6'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        aria-hidden='true'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M4 6h16M4 12h16M4 18h16'
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={isMobile && width < 768 ? 'block' : 'hidden'}>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <a
                            href='#'
                            className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                        >
                            Dashboard
                        </a>

                        <a
                            href='#'
                            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                        >
                            Team
                        </a>

                        <a
                            href='#'
                            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                        >
                            Projects
                        </a>

                        <a
                            href='#'
                            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                        >
                            Calendar
                        </a>

                        <a
                            href='#'
                            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                        >
                            Reports
                        </a>
                    </div>
                    <div className='pt-4 pb-3 border-t border-gray-700'>
                        <div className='flex items-center px-5'>
                            <div className='flex-shrink-0'>
                                <img
                                    className='h-10 w-10 rounded-full'
                                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                    alt=''
                                />
                            </div>
                            <div className='ml-3'>
                                <div className='text-base font-medium leading-none text-white'>
                                    Tom Cook
                                </div>
                                <div className='text-sm font-medium leading-none text-gray-400'>
                                    tom@example.com
                                </div>
                            </div>
                            <button className='ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                                <span className='sr-only'>
                                    View notifications
                                </span>
                                <svg
                                    className='h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className='mt-3 px-2 space-y-1'>
                            <a
                                href='#'
                                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
                            >
                                Your Profile
                            </a>

                            <a
                                href='#'
                                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
                            >
                                Settings
                            </a>

                            <a
                                href='#'
                                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
                            >
                                Sign out
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
