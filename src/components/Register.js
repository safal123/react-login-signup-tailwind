/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Inputs/Button';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState();
    const history = useHistory();
    const { register, auth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const password_confirmation = confirmPassword;
        setIsLoading(true);
        const data = {
            name,
            email,
            password,
            password_confirmation,
        };
        if (password !== password_confirmation) {
            setErrors({ message: 'Passwords do not match.' });
            setIsLoading(false);
            return;
        }
        register(data)
            .then((data) => {
                setErrors();
                setIsLoading(false);
                localStorage.setItem('token', data.data.success.token);
                history.push('/');
            })
            .catch((error) => {
                setErrors(error.response.data.errors);
                setIsLoading(false);
            });
    };
    return (
        <div>
            <div className='min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md w-full space-y-8 bg-gray-100 p-8 rounded shadow-lg'>
                    <div>
                        <img
                            className='mx-auto h-12 w-auto'
                            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                            alt='Workflow'
                        />
                        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                            Create new account
                        </h2>
                    </div>
                    {errors && <pre>{JSON.stringify(errors, null, '\t')}</pre>}
                    {/* {errors && JSON.parse(errors)} */}
                    {errors && (
                        <div className='bg-red-100 px-4 py-4 text-sm font-semibold text-red-700 rounded shadow-sm'>
                            {Object.keys(errors).map((error, index) => (
                                <p className='list-disc' key={index}>
                                    {errors[error]}
                                </p>
                            ))}
                        </div>
                    )}
                    <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                        <input type='hidden' name='remember' value='true' />
                        <div className='rounded-md shadow-sm -space-y-px'>
                            <div>
                                <label
                                    htmlFor='email-address'
                                    className='sr-only'
                                >
                                    Name
                                </label>
                                <input
                                    id='full-name'
                                    name={name}
                                    value={name}
                                    type='text'
                                    // required
                                    autoComplete='email'
                                    onChange={(e) => setName(e.target.value)}
                                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                    placeholder='Full Name'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='email-address'
                                    className='sr-only'
                                >
                                    Email address
                                </label>
                                <input
                                    id='email-address'
                                    name={email}
                                    type='email'
                                    autoComplete='email'
                                    // required
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                    placeholder='Email address'
                                />
                            </div>
                            <div>
                                <label htmlFor='password' className='sr-only'>
                                    Password
                                </label>
                                <input
                                    id='password'
                                    name={password}
                                    type='password'
                                    autoComplete='passsword'
                                    // required
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                    placeholder='Password'
                                />
                            </div>
                            <div>
                                <label htmlFor='password' className='sr-only'>
                                    Confirm Password
                                </label>
                                <input
                                    id='confirm-password'
                                    name={confirmPassword}
                                    type='password'
                                    autoComplete='confirm-password'
                                    // required
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                    placeholder='Confirm Password'
                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-end'>
                            <div className='text-sm'>
                                <Link
                                    to='/login'
                                    className='font-medium text-indigo-600 hover:text-indigo-500'
                                >
                                    Already have an account?
                                </Link>
                            </div>
                        </div>

                        <Button
                            type={'submit'}
                            text={'Register'}
                            isLoading={isLoading}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
