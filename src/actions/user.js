import axios from 'axios';

export const fetchUser = async (pagenumber) => {
    try {
        const data = await axios.get(`https://randomuser.me/api?${pagenumber}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};
