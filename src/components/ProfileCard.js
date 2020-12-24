import React from 'react';

const Profile = ({ userInfo }) => {
    if (!userInfo)
        return (
            <div className=''>
                <h1>Please wait loading...</h1>
            </div>
        );
    return userInfo.map((user, index, { length }) => (
        <div
            key={index}
            className={
                (index === length - 1 ? '' : 'border-b-2') +
                ' h-24 bg-gray-200 p-4 flex border-gray-300'
            }
        >
            <img
                src={user.picture.medium}
                alt={user.name.first + '_image'}
                className='rounded-full'
            />
            <div className='ml-4 border-l-2 border-gray-300'>
                <div className='px-4'>
                    <p>
                        {user.name.first} {user.name.last}
                    </p>
                    Email: {user.email}
                </div>
            </div>
            
        </div>
    ));
};

export default Profile;
