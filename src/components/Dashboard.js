/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
// import Profile from './ProfileCard';
// import { fetchUser } from '../actions/user';

const Dashboard = () => {
    // const [userInfo, setUserInfo] = useState([]);
    // const [currentPageNumber, setCurrentPageNumber] = useState(1);

    useEffect(() => {
        // loadMoreData();
    }, []);

    // const loadMoreData = () => {
    //     fetchUser(currentPageNumber).then((response) => {
    //         const newUserInfo = [...userInfo, ...response.data.results];
    //         setUserInfo(newUserInfo);
    //         console.log(newUserInfo);
    //     });
    // };

    return (
        <div className='bg-white shadow-md max-w-7xl mx-auto p-4 mt-6 rounded'>
            {/* <Profile userInfo={userInfo} />
            <button
                className='bg-blue-500 rounded-sm p-2 text-sm text-white outline-none mb-4 mt-4'
                onClick={() =>
                    loadMoreData(setCurrentPageNumber(currentPageNumber + 1))
                }
            >
                Load more..
            </button> */}
            <h1>Welcome user..</h1>
        </div>
    );
};

export default Dashboard;
